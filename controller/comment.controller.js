const { Comment } = require("../models/comment.model");

const createComment = async (req, res) => {
  const { text, creator } = req.body;
  try {
    if (text && creator) {
      const comment = await new Comment({
        text,
        creator,
      }).save();
      res.send(comment);
      console.log(comment);
    }
  } catch (err) {
    res.status(404).send("error zaalaa");
  }
};

const getComments = async (req, res) => {
  const result = await Comment.find({});
  res.send(result);
};

const deleteComment = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Comment.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    res.status(404).send("error zaalaa");
  }
};

module.exports = { createComment, deleteComment, getComments };
