const { Router } = require("express");

const { profileBookingDetails, profileUserDetails } = require("../controllers/profile.controller");
const express = require("express");

const app = express();
const profileRouter = Router();

profileRouter.get("/api/v1/profile/bookingdetails", profileBookingDetails);
profileRouter.get("/api/v1/profile/userdetails", profileUserDetails);

module.exports = profileRouter;