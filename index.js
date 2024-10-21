const express = require("express");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const PORT = 10000;

const app = express();

mongoose
  .connect("mongodb+srv://phadnisanandhyd:YDGzMQqnfpuDapms@cluster0.azvp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
