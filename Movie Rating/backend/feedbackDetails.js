const mongoose = require("mongoose");

const FeedbackDetailsScehma = new mongoose.Schema(
  {
    feedback:String,
    star:Number,
    userName: String,
    movieid:String,
  },
  {
    collection: "feedbackInfo",
  }
);

mongoose.model("FeedbackInfo", FeedbackDetailsScehma);