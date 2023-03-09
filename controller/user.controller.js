const { User } = require("../models/user.model");

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    res.status(401).send(err);
  }
};

const getUsers = async (_req, res) => {
  try {
    const result = await User.find({}); //populate("posts")
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findById(id); //populate("posts")
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

module.exports = { deleteUser, getUser, getUsers };
