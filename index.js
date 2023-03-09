const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const { userRoutes } = require("./routes/user.routes");
const { commentRoutes } = require("./routes/comment.routes");
const { postRoutes } =require("./routes/post.routes");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

connect();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(commentRoutes);
app.use(postRoutes);

app.get("/", (req, res) => {
  res.send("hello mfs");
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
