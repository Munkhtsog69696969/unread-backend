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
    const result = await User.find({}).populate("posts"); //populate("posts")
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await User.findById(id).populate("posts"); //populate("posts")
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
};

const addUserPost = async (req, res) => {
  const { userId, postId } = req.body;
  try {
    const user = await User.findById(userId).populate("posts");
    user.posts.push(postId);
    await user.save();
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { deleteUser, getUser, getUsers , addUserPost };
