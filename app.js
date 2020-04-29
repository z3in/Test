const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const formidable = require("express-formidable");

//middleware
app.use(bodyParser.json());
app.use(formidable());
//import routes
const postRoutes = require("./routes/post");

app.use("/post", postRoutes);
//connect db
mongoose.connect(
  process.env.DB_CONNETION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected");
  }
);

//listen port
app.listen(80);
