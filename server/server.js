const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const PORT = 3000;
const api = require("./routes/api");
const app = express();
app.use(cors());
app.use(bodyparser.json());

app.get("/", function(req, res) {
  res.send("Server Running!");
});
app.use("/api", api);
app.listen(PORT, function() {
  console.log("Server Running on port:" + PORT);
});
