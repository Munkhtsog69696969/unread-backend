const express = require("express");
const {
  createComment,
  deleteComment,
  getComments,
} = require("../controller/comment.controller");
const { roleMiddleware } = require("../middlewares/roleMiddleware");

const router = express.Router();

router
  .get("/comments", roleMiddleware, getComments)
  .post("/create", createComment)
  .delete("/comment/:id", roleMiddleware, deleteComment);

module.exports.commentRoutes = router;
