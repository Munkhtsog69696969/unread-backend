const express=require("express");

const {createPost}=require("../controller/post.controller");

const {getPosts}=require("../controller/post.controller")

const router=express.Router();

router
    .get("/getPost",getPosts)
    .post("/createPost",createPost)
module.exports.postRoutes=router;