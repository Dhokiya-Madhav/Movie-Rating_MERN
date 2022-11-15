const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    userName:String,
    password: String,
    email: { type: String, unique: true },
  },
  {
    collection: "userInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);