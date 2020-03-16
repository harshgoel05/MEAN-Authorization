const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/users");
const db = "mongodb://localhost:27017/userdata";
const jwt = require("jsonwebtoken");
mongoose.connect(db, function(err, db) {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).send("Unauthorized");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token == null) {
    res.status(401).send("Unauthorized");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    res.status(401).send("Unauthorized");
  }
  req.userId = payload.subject;
  next();
}

router.get("/", function(req, res) {
  res.send("from the api");
});

router.post("/register", (req, res) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      let payload = { subject: data._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  console.log(userData);
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send("Invalid Email!");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Wrong Password!");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");
          res.status(200).send({ token });
        }
      }
    }
  });
});
router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    }
  ];
  res.json(events);
});

router.get("/special", verifyToken, (req, res) => {
  let specialEvents = [
    {
      _id: "1",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "2",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "3",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "4",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "5",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "6",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    }
  ];
  res.json(specialEvents);
});
module.exports = router;
