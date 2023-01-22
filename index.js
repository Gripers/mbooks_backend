const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const router = require("./router");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

mongoose.set("strictQuery", false);

const start = async () => {
  await mongoose.connect(
    "mongodb+srv://riot:riot@cluster0.izam3a2.mongodb.net"
  );
  app.listen(8080, () => console.log("server started"));
};

start();
