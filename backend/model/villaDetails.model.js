const {Schema,model}=require('mongoose')

const villaDetailsSchema=Schema({
  name: { 
    type: String,
    required: true 
    },

  description: { 
    type: String,
    required: true 
    },

    location: { 
      type: String,
      required: true 
      },

  maxPerson:{
    type: Number,
    require: true
  },

  rent:{
    type: Number,
    require: true
  },

  bedRoomCount:{
    type: Number,
    require: true
  },

  bedCount:{
    type: Number,
    require: true
  },

  bathroomCount:{
    type: Number,
    require: true
  },

  roomType:{
    type: String,
    required: true 
  },

  longitude:{
    type: String,
    required: true 
  },

  latitude:{
    type: String,
    required: true 
  },

  villaImages: {
    type: [String], 
    required: true,
  },

  labels: {
    type: [String], 
    required: true,
  },

  amenities: {
    mountainView: { type: Boolean, required: true },
    chef: { type: Boolean, required: true },
    kitchen: { type: Boolean, required: true },
    bath: { type: Boolean, required: true },
    fireExtinguisher: { type: Boolean, required: true },
    petsAllowed: { type: Boolean, required: true },
    smokingAllowed: { type: Boolean, required: true },
    privatePool: { type: Boolean, required: true },
    publicPool: { type: Boolean, required: true },
    garden: { type: Boolean, required: true },
    parking: { type: Boolean, required: true },
    hotWater: { type: Boolean, required: true },
    firstAidKit: { type: Boolean, required: true },
    heating: { type: Boolean, required: true },
    boardGames: { type: Boolean, required: true },
    wifi: { type: Boolean, required: true },
    tv: { type: Boolean, required: true },
    securityCamera: { type: Boolean, required: true },
    airConditioning: { type: Boolean, required: true },
    cookingBasics: { type: Boolean, required: true },
    smokeAlarm: { type: Boolean, required: true },    
  },
},{
  timestamps:true

});

module.exports.Villa =model('Villa',villaDetailsSchema)