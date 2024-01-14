const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const { bookingDetails } = require("../model/bookingDetails.model");
const { UsersDetails } = require("../model/userDetails.model");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


exports.profileBookingDetails = async (req, res) => {
    const userUID = '6592ec5e64879c5a1c5ca91e'

    try {
    const userBookingDetails = await bookingDetails.find({ userUID: userUID });
    console.log(userBookingDetails)

        
        if(!userBookingDetails.length){
          console.log("No Booking")
          return res
        .status(httpStatusCodes[204].code)
        .json(
          formResponse(httpStatusCodes[204].code, "No Booking"));  
        }
        
    
        return res
        .status(httpStatusCodes[200].code)
        .json(
          formResponse(httpStatusCodes[200].code, userBookingDetails));  
        } catch (error) {
        console.error('Error fetching villas:', error);
        return res
        .status(httpStatusCodes[500].code)
        .json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
        }
    
}


exports.profileUserDetails = async (req, res) => {
    const userUID = '6592ec5e64879c5a1c5ca91e'
    if(userUID.length != 24){
        return res.status(204).json(formResponse(httpStatusCodes[204].code, "Invalid Villa"));
      }
    var U_id = new ObjectId(userUID);
    console.log(U_id)

    try {
        const profileUserDetails = await UsersDetails.findOne({ _id: U_id });
        console.log(profileUserDetails)
        var username = profileUserDetails.username
        var email = profileUserDetails.email

    
            
            if(!profileUserDetails){
              console.log("No User")
              return res
            .status(httpStatusCodes[204].code)
            .json(
              formResponse(httpStatusCodes[204].code, "No User"));  
            }
            
            const profileUsersDetails = new UsersDetails({
                username: username,
                email: email,
              });
        
            return res
            .status(httpStatusCodes[200].code)
            .json(
              formResponse(httpStatusCodes[200].code, profileUsersDetails));  
            } catch (error) {
            console.error('Error fetching villas:', error);
            return res
            .status(httpStatusCodes[500].code)
            .json(formResponse(httpStatusCodes[500].code, "abc"));
            }
}