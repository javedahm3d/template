const {Schema,model}=require('mongoose')

const userDetailsSchema=Schema({
  username: { 
    type: String,
    required: true 
    },

  email:{
    type: String,
    required: true
  },

  u_password:{
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

},{
  timestamps:true

});


// module.exports.usersDetails =model('usersDetails',userDetailsSchema)

// const UsersDetails = model('users', userDetailsSchema); 

// module.exports = UsersDetails; 

module.exports.UsersDetails =model('users',userDetailsSchema)