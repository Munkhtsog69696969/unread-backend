const { Comment } = require("../models/comment.model");
const  Post  = require('../models/post.model')

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

const addCommentsToPost = async (req, res) => {
  const { postId, commentId } = req.body;
  try {
    const post = await Post.findById(postId).populate("comments");
    post.comments.push(commentId);
    await post.save();
    res.send(post);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createComment, deleteComment, getComments, addCommentsToPost };
