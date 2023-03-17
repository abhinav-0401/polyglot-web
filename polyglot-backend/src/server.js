const Express = require("express");
const cors = require("cors");

const app = Express();

app.use(cors({
  origin: "*",
}));

app.get("/", (req, res) => {
  res.send("Take this please");
});

app.listen("1234", () => console.log("Server's now live at localhost:1234"));