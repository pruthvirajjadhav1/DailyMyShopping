const Package = require("../models/package");
const Place = require("../models/place");
const Hotel = require("../models/hotel");
const Restaurant = require("../models/restaurant");

exports.createPackage = async (req, res) => {
  try {
    const place = await Place.create(req.body.place);
    const hotel = await Hotel.create(req.body.hotel);
    const restaurant = await Restaurant.create(req.body.restaurant);

    const package = await Package.create({
      name: req.body.name,
      duration: req.body.duration,
      numberOfPeople: req.body.numberOfPeople,
      place: place._id,
      hotel: hotel._id,
      restaurant: restaurant._id,
    });

    res.status(201).json(package);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getPackage = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id)
      .populate("place")
      .populate("hotel")
      .populate("restaurant");

    res.json(package);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
