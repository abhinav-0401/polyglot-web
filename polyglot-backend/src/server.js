const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

const dbUri = "mongodb+srv://abhinav040104:norwegianWood_84@cluster0.qeurouh.mongodb.net/polyglot-web?retryWrites=true&w=majority";
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to the database");
    app.listen("1234", () => console.log("Server's now live at localhost:1234"));
  })
  .catch((err) => console.log(err));


app.use(cors({
  origin: "*",
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Take this please");
});

// hehe
app.get("/new-user", (req, res) => {
  const user = new User({
    name: "test0",
    tx_id: "000000",
  });

  user.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
});

app.get("/all-users", (req, res) => {
  User.find()
    .then(result => {
      res.send(result)
    })
    .catch(err => console.log(err));
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    tx_id: req.body.tx_id,
  });

  user.save()
    .then(result => {
      res.send(JSON.stringify({ status: "ok" }));
    })
    .catch(err => {
      res.send(JSON.stringify({ status: "err" }));
    });
});

app.post("/api/login", async (req, res) => {
  const txId = req.body.tx_id;

  const user = await User.find({ tx_id: txId }).lean();

  if (user.length === 0) {
    res.send({ status: "Invalid technex id" });
  }

  res.send({ status: "ok", user: user[0] });
});

// app.listen("1234", () => console.log("Server's now live at localhost:1234"));