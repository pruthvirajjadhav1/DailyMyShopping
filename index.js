const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/DailyMyShopping", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const packageRoutes = require("./routes/package");

app.use("/packages", packageRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
