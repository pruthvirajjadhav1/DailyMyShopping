const express = require("express");
const packageController = require("../controllers/package");

const router = express.Router();

router.post("/", packageController.createPackage);
router.get("/:id", packageController.getPackage);

module.exports = router;
