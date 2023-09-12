require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movies");
const fileUpload = require("express-fileupload");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(fileUpload());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/movies", movieRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
