const Post = require("../models/post.model");

exports.createPost = async (req, res) => {
    const { title, mainNews, creatorId, imageUrls } = req.body;

    try {
        const newPost = await Post.create({ title: title, mainNews: mainNews, creatorId: creatorId, imageUrls: imageUrls });

        res.send(newPost)
    } catch (err) {
        res.status(404).send("error");
    }
}

exports.getPosts = async (req, res) => {
    const result = await Post.find({}).populate("creatorId");
    res.send(result);
};

exports.getPost = async (req, res) => {
    try {
        const result = await Post.findById(req.params.id)
            .populate("creatorId")
            .populate("comments");
        res.send(result);
    } catch (error) { }
};