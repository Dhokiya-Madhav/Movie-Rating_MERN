const mongoose = require("mongoose");

const ContactDetailsScehma = new mongoose.Schema(
  {
          firstname:String,
          lastname:String,
          phone:Number,
          subject:String,
          email: { type: String, unique: true },  
  },
  {
    collection: "contactInfo",
  }
);

mongoose.model("ContactInfo", ContactDetailsScehma);