const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
const { response } = require("express");
app.use(cors());
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  service: 'gmail',
  auth: {

    user: 'apnatheatre727@gmail.com',
    pass: 'BBY5Wzr8a5mppMk'

  }

});
const mongoUrl = "mongodb://localhost:27017/Movie_Rating";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

require("./MovieDetails");
const Movie = mongoose.model("MovieInfo");


require("./contactDetails");
const Contact = mongoose.model("ContactInfo");

require("./feedbackDetails");
const Feedbackd = mongoose.model("FeedbackInfo");


//Registration
app.post("/register", async (req, res) => {
  const { userName, password, email } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      userName,
      password,
      email,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

//contact

app.post("/contact", async (req, res) => {
  const { userName, email, message } = req.body;

  try {
    await Contact.create({
      userName,
      email,
      message,
    });
    res.send({ status: "ok" });
    console.log("ok");
  } catch (error) {
    res.send({ status: "error" });
  }
});

//feedback
app.post("/feedback", async (req, res) => {
  const { feedback, star, userName, movieid } = req.body;
  console.log(feedback, star, userName, movieid);
  try {
    const oldfeedback = await Feedbackd.findOne({ userName });

    if (oldfeedback) {
      const oldfeedbackmovieid = await Feedbackd.findOne({ movieid });
      if (oldfeedbackmovieid) {
        return res.json({ error: "feedback Exists" });
      }
    }
    
    await Feedbackd.create({
      feedback,
      star,
      userName,
      movieid,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: feedback, star, userName, movieid });
    console.log(error);
  }
});


//single movie
app.get("/singlemovie/:id", (req, res) => {
  Movie.find({ _id: req.params.id }, { __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  })
});

//review
app.get("/review/:id", (req, res) => {
  Feedbackd.find({ movieid: req.params.id }, { __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  })
});

//search movie
app.get("/searchmovie/:search", (req, res) => {
  Movie.find({ Name: req.params.search }, { __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  })
});

//Login
app.post("/login-user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.send({ error: "User Not found" });
  }
  res.send(user);

});

//Forgot Password
app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.send({ error: "User Not found" });
  }
  var mailOptions = {
    from: 'apnatheatre727@gmail.com',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'It is easy to send an email!'
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }

  });
  res.send(user);
});



//movieregister
app.post("/registermovie", async (req, res) => {
  const { Image, Name, Desc, Movietype, Movieorigin, actress, actor, imdb, rtime, rdate } = req.body;

  try {
    const oldMovie = await Movie.findOne({ Name });

    if (oldMovie) {
      return res.json({ error: "Movie Exists" });
    }
    await Movie.create({
      Image, Name, Desc, Movietype, Movieorigin, actress, actor, imdb, rtime, rdate
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});



app.get("/Bollywood", (req, res) => {
  Movie.find({ Movieorigin: "Bollywood" }, { _id: 1, __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  }).sort({ _id: 1 }).limit(6)
});

app.get("/Hollywood", (req, res) => {
  Movie.find({ Movieorigin: "Hollywood" }, { _id: 0, __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  }).sort({ _id: 1 }).limit(6)
});
app.get("/SouthIndian", (req, res) => {
  Movie.find({ Movieorigin: "South Indian" }, { _id: 0, __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  }).sort({ _id: 1 }).limit(6)
});
app.get("/WebSeries", (req, res) => {
  Movie.find({ Movieorigin: "Web Series" }, { _id: 0, __v: 0 }, (err, emps) => {
    if (err) {
      return res.status(400).json({ error: err })
    }
    if (emps && emps.length == 0) {
      return res.status(400).json({ error: 'No records found!' })
    }
    return res.status(200).json(emps)
  }).sort({ _id: 1 }).limit(6)
});




app.listen(5000, () => {
  console.log("Server Started");
});

