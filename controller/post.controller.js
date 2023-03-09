const Post=require("../models/post.model");

exports.createPost=async(req,res)=>{
    const {title , mainNews}=req.body;

    const creatorId=req.params.id;

    const newPost=await Post.create({title:title , mainNews:mainNews , creatorId:creatorId});

    newPost.save();
}