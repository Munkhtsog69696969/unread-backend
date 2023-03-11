const express=require("express");

const {createPost}=require("../controller/post.controller");

const router=express.Router();

router
    .post("/createPost",createPost)
module.exports.postRoutes=router;