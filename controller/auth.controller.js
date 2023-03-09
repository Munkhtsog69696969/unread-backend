const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signupUser = async (req, res) => {
  const { username, password, passwordConfirm, email, roles } = req.body;
  const exist = await User.findOne({ username });
  if (!exist) {
    if (username && password && email) {
      if (password === passwordConfirm) {
        try {
          const encrypted = await bcrypt.hash(password, 10);
          const user = await new User({
            username,
            password: encrypted,
            roles,
            email,
          }).save();
          res.send(user);
        } catch (err) {
          res.status(403);
        }
      } else {
        res.status(401).send("password doesn't match");
      }
    } else {
      res.status(401);
    }
  } else {
    res.status(401).send("username already in use");
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    console.log(user);
    try {
      const isEqaul = await bcrypt.compare(password, user.password);
      if (isEqaul) {
        const token = jwt.sign({ user }, process.env.JWT_SECRET, {
          expiresIn: "30min",
        });
        res.send(token);
      } else {
        res.status(401).send("username or password wrong");
      }
    } catch (err) {
      res.status(403);
    }
  } else {
    res.status(404).send("No account found");
  }
};

const VerifyUser = async (req, res) => {
  if (req.headers.authorization) {
    try {
      await jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET,
        (error, item) => {
          if (!error) {
            res.send(item);
          }
        }
      );
    } catch (error) {
      res.status(401);
    }
  } else {
    res.status(404).send("Authentication required");
  }
};
module.exports = { signupUser, loginUser, VerifyUser };
