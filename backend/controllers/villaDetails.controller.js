const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
// const jwt = require("jsonwebtoken");
const { Villa } = require("../model/villaDetails.model");



exports.addVilla = async (req, res) => {
    
    const {
        name,
        description,
        location,
        maxPerson,
        rent,
        roomType,
        villaImages,
        amenities
      } = req.body;
      
      console.log({
        name,
        description,
        maxPerson,
        rent,
        roomType,
        villaImages,
        amenities
      });
      
      try {
        if (
          !name ||
          !description ||
          !location ||
          !maxPerson ||
          !rent ||
          !roomType ||
          !villaImages ||
          !amenities
        ) {
          return res.status(httpStatusCodes[400].code).json(
            formResponse(httpStatusCodes[400].code, "Enter all details")
          );
        }
        const newVilla = new Villa({
          name,
          description,
          location,
          maxPerson,
          rent,
          roomType,
          villaImages,
          amenities
        });
      
        // Use insertMany to insert a single document
        await Villa.insertMany([newVilla]);
      
        return res.status(httpStatusCodes[201].code).json(
          formResponse(httpStatusCodes[201].code, "Villa created successfully")
        );
      } catch (error) {
        console.error('Error:', error);
        return res.status(httpStatusCodes[500].code).json(
          formResponse(httpStatusCodes[500].code, "Internal Server Error")
        );
      }
      



}

exports.displayVilla = async (req, res) => {
  try {
    const allVillas = await Villa.find();
    console.log(allVillas)
    return res
    .status(httpStatusCodes[200].code)
    .json(
      formResponse(httpStatusCodes[200].code, allVillas));  
    } catch (error) {
    console.error('Error fetching villas:', error);
    return res
    .status(httpStatusCodes[500].code)
    .json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
    }
}