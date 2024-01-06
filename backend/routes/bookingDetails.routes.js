const { Router } = require("express");

const { booking } = require("../controllers/booking.controller");
const express = require("express");

const app = express();
const bookingDetailsRouter = Router();

bookingDetailsRouter.post("/api/v1/booking", booking);

module.exports = bookingDetailsRouter;