const { Router } = require("express");

const { profileBookingDetails } = require("../controllers/profile.controller");
const express = require("express");

const app = express();
const profileBookingDetailsRouter = Router();

profileBookingDetailsRouter.post("/api/v1/profile/bookingdetails", profileBookingDetails);

module.exports = profileBookingDetailsRouter;