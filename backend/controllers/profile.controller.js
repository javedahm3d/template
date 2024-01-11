const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const { bookingDetails } = require("../model/bookingDetails.model");
const { Villa } = require("../model/villaDetails.model");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


exports.profileBookingDetails = async (req, res) => {
    return res.status(httpStatusCodes[201].code).json(
        formResponse(httpStatusCodes[201].code, "Profile Booking Details"));
}