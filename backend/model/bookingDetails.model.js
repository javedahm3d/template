const {Schema,model}=require('mongoose')

const bookingDetailsSchema=Schema({
  villaUID: { 
    type: String,
    required: true 
    },

  userUID:{
    type: String,
    require: true
  },

  checkIn:{
    type: String,
    require: true
  },

  checkOut:{
    type:String,
    required:true
  },

  type:{
    type:String,
    required:true
  },

  total:{
    type:String,
    required:true
  },

},{
    timestamps:true
  
  });



// const bookingDetails = model('usersDetails', bookingDetailsSchema); 

// module.exports = bookingDetails; 

module.exports.bookingDetails =model('bookingDetailsSchema',bookingDetailsSchema)