import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = 4000;

const MONGO_URL = "mongodb://127.0.0.1:27017";
mongoose
  .connect(MONGO_URL, {
    dbName: "node-typescript-app",
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to the database: ", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
