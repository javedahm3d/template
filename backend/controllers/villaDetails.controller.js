const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
// const jwt = require("jsonwebtoken");
const { Villa } = require("../model/villaDetails.model");
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;



exports.addVilla = async (req, res) => {
    
    const {
        villa
      } = req.body;
      
      console.log({
        villa
      });

      const name = villa.name;
      const description = villa.description;
      const location = villa.location;
      const maxPerson = villa.maxPerson;
      const rent = villa.rent;
      const bedRoomCount = villa.bedRoomCount;
      const bedCount = villa.bedCount;
      const bathroomCount = villa.bathroomCount;
      const roomType = villa.roomType;
      const longitude = villa.longitude;
      const latitude = villa.latitude;
      const villaImages = villa.villaImages;
      const labels = villa.labels;
      const amenities = villa.amenities;
      
      try {
        if (
          !name ||
          !description ||
          !location ||
          !maxPerson ||
          !rent ||
          !bedRoomCount ||
          !bedCount ||
          !bathroomCount ||
          !roomType ||
          !longitude ||
          !latitude ||
          !villaImages ||
          !labels ||
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
          bedRoomCount, 
          bedCount, 
          bathroomCount, 
          roomType, 
          longitude, 
          latitude, 
          villaImages, 
          labels, 
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
    
const villa = []

    for(var i=0;i<allVillas.length;i++){
      const currentVilla = allVillas[i];

      villa.push({
        id: currentVilla._id,
        name: currentVilla.name,
        image: currentVilla.villaImages[0],
        price: currentVilla.rent,
        location: currentVilla.location,
        rooms: currentVilla.bedRoomCount,
        labels: currentVilla.labels,
      });
    }

    console.log(villa)

    return res
    .status(httpStatusCodes[200].code)
    .json(
      formResponse(httpStatusCodes[200].code, villa));  
    } catch (error) {
    console.error('Error fetching villas:', error);
    return res
    .status(httpStatusCodes[500].code)
    .json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
    }
}


exports.displayVillaDetails = async (req, res) => {

  const villaId = req.query.villaId
  console.log({villaId})
  console.log("Length")
  console.log(villaId.length)
  if(villaId.length < 24){
    return res
    .status(httpStatusCodes[500].code)
    .json(
      formResponse(httpStatusCodes[500].code, "Villa ID Format Incorrect"));  
    }
    
    var V_id = new ObjectId(villaId);
  
  try {
    const villaDetails = await Villa.find({ _id: V_id });
    // console.log(villaDetails[0].amenities)
    
    if(!villaDetails.length){
      console.log("Doesnt exsist")
      return res
    .status(httpStatusCodes[500].code)
    .json(
      formResponse(httpStatusCodes[500].code, "Villa doesnt exsist"));  
    }
    

    return res
    .status(httpStatusCodes[200].code)
    .json(
      formResponse(httpStatusCodes[200].code, villaDetails));  
    } catch (error) {
    console.error('Error fetching villas:', error);
    return res
    .status(httpStatusCodes[500].code)
    .json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
    }


}
