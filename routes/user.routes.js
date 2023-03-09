const express = require("express");
const {
  signupUser,
  loginUser,
  Verify,
  VerifyUser,
} = require("../controller/auth.controller");
const {
  deleteUser,
  getUser,
  getUsers,
} = require("../controller/user.controller");

const router = express.Router();

router
  .get("/users", getUsers)
  .get("/user/:id", getUser)
  .get("/verify", VerifyUser)
  .post("/signup", signupUser)
  .post("/login", loginUser)
  .delete("/user/:id", deleteUser);

module.exports.userRoutes = router;
