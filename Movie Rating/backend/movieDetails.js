const mongoose = require("mongoose");

const MovieDetailsScehma = new mongoose.Schema(
  {
    Image:String,
    Name:String,
    Desc:String,
    Movietype:String,
    Movieorigin:String,
    actress:String,
    actor:String,
    imdb:Number,
    rtime:Number,
    rdate:Date,
    Name: { type: String, unique: true },
  },
  {
    collection: "movieInfo",
  }
);

mongoose.model("MovieInfo", MovieDetailsScehma);