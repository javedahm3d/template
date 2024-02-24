const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const { bookingDetails } = require("../model/bookingDetails.model");
const { Villa } = require("../model/villaDetails.model");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;




exports.booking = async (req, res) => {
    console.log("In Booking")
    const fetch = require('node-fetch');
    const cookie = req.headers.cookie;
    console.log({cookie})

    const villaUID=req.query.villaUID;
    console.log({villaUID})
    // const userUID = '6592ec5e64879c5a1c5ca91e'
    const response = await fetch("http://localhost:3001/api/v1/currentUser", {
  headers: {
    Cookie: cookie // Pass the cookie in the request headers
  }
});
    console.log("User ID :- ")

    const { booking } = req.body;
    // console.log(req.body)
    // console.log('villaUID :- ',villaUID)

    if(villaUID.length != 24){
      return res.status(204).json(formResponse(httpStatusCodes[204].code, "Invalid Villa"));
    }

    var V_id = new ObjectId(villaUID);

    const villaCount = await Villa.findOne({ _id: V_id });
    // console.log(villaCount)

    if(!villaCount){
      return res.status(204).json(formResponse(httpStatusCodes[204].code, "Invalid Villa"));
    }

    // try{

    //   if (
    //     !booking.checkIn ||
    //     !booking.checkOut ||
    //     !booking.total ||
    //     !booking.type
    //   ) {
    //     console.log("Fill details")
    //     console.log(booking.checkIn)
    //     console.log(booking.checkOut)
    //     console.log(booking.total)
    //     console.log(booking.type)
    //     return res.status(httpStatusCodes[400].code).json(
    //       formResponse(httpStatusCodes[400].code, "Enter all details")
    //     );
    //   }

    //   const newBooking = new bookingDetails({
    //     villaUID,
    //     userUID,
    //     checkIn:booking.checkIn,
    //     checkOut:booking.checkOut,
    //     type:booking.total,
    //     total:booking.type
    //   });
    
    //   // Use insertMany to insert a single document
    //   await bookingDetails.insertMany([newBooking]);

    //   console.log("Inserted")
    
    //   return res.status(httpStatusCodes[200].code).json(
    //     formResponse(httpStatusCodes[200].code, "Booking created successfully"));

    // }catch (error) {
    // console.error('Error Booking:', error);
    // return res
    // .status(httpStatusCodes[500].code)
    // .json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
    // }

    return res.status(httpStatusCodes[200].code).json(
          formResponse(httpStatusCodes[200].code, "Booking created successfully"));

};



