const {Schema,model}=require('mongoose')
const jwt = require("jsonwebtoken")
require('dotenv/config')


const userDetailsSchema=Schema({
  username: { 
    type: String,
    required: true 
    },

  email:{
    type: String,
    required: true
  },

  password:{
    type: String,
  },

  u_dob:{
    type:String,
  },

  u_phoneNo:{
    type:String,
  },

  wishlist: {
    type: [String], 
  },
  accessToken:{
    type:String,
  },

},{
  timestamps:true

});

userDetailsSchema.methods.generateAccessToken = function(){
  console.log("In JWT Function")
  return jwt.sign(
      {
          _id: this._id,
          email: this.email,
          username: this.username,
          fullName: this.fullName
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}


// module.exports.usersDetails =model('usersDetails',userDetailsSchema)

const UsersDetails = model('UsersDetails', userDetailsSchema);

module.exports = UsersDetails;

// module.exports.UsersDetails =model('users',userDetailsSchema)