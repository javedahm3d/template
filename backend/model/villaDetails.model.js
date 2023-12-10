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

  villaImages: {
    type: [String], 
    required: true,
  },

  amenities: {
    pool: { type: Boolean, required: true },
    wifi: { type: Boolean, required: true },
    kitchen: { type: Boolean, required: true },
    barbeque: { type: Boolean, required: true },
    pets: { type: Boolean, required: true },
    tv: { type: Boolean, required: true },
    garden: { type: Boolean, required: true },
    parking: { type: Boolean, required: true },
  },
},{
  timestamps:true

});

module.exports.Villa =model('Villa',villaDetailsSchema)