const express = require("express");

const { createPost } = require("../controller/post.controller");

const { getPosts } = require("../controller/post.controller")

const { getPost } = require("../controller/post.controller");

const router = express.Router();

router
    .get("/getPosts", getPosts)
    .get("/getPost/:id", getPost)
    .post("/createPost", createPost)
    .get("/getPost/:id", getPost)
module.exports.postRoutes = router;