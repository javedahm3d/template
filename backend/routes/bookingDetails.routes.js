const { Router } = require("express");

const { booking } = require("../controllers/booking.controller");
const { paymentuser } = require("../controllers/razorpay.controller");

const express = require("express");

const app = express();
const bookingDetailsRouter = Router();

bookingDetailsRouter.post("/api/v1/booking", booking);
bookingDetailsRouter.post("/api/v1/razorpay", paymentuser);

module.exports = bookingDetailsRouter;