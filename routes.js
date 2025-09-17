const express = require("express");
const router = express.Router();
const { addTrip, getTrips } = require("../controllers/tripsController");

router.post("/", addTrip);
router.get("/", getTrips);

module.exports = router;
