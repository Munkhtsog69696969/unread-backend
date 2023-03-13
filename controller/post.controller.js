const Post = require("../models/post.model");

exports.createPost = async (req, res) => {
    const { title, mainNews, creatorId , imageUrls } = req.body;

    try{
        const newPost = await Post.create({ title: title, mainNews: mainNews, creatorId: creatorId ,imageUrls:imageUrls });

        res.send(newPost)
    }catch(err){
        res.status(404).send("error");
    }
}

exports.getPosts = async (req, res) => {
    const posts = await Post.find({}).populate("creatorId");

    res.send(posts);
}

exports.getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Post.findById(id).populate("creatorId");
        
        res.send(result);
    } catch (err) {
        res.status(404).send("error");
    }
};