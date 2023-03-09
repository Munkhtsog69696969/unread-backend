const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
  },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "posts",
    },
  ],

  roles: {
    type: Array,
    default: ["publisher"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
const User = model("user", userSchema);

module.exports.User = User;
