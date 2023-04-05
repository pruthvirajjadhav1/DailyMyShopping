const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
