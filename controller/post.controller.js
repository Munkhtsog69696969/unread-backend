const Post=require("../models/post.model");

exports.createPost=async(req,res)=>{
    const {title , mainNews ,creatorId}=req.body;

    const newPost=await Post.create({title:title , mainNews:mainNews , creatorId:creatorId});

    newPost.save();

    res.send(newPost)
}   

exports.getPosts=async(req,res)=>{
    const posts=await Post.find({});

    res.send(posts);
}