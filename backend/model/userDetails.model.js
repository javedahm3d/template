const {Schema,model}=require('mongoose')

const userDetailsSchema=Schema({
  u_name: { 
    type: String,
    required: true 
    },

  u_email:{
    type: String,
    require: true
  },

  u_password:{
    type: String,
    require: true
  },

  u_dob:{
    type:String,
    required:true
  },

  u_phoneNo:{
    type:String,
    required:true
  },

});

// module.exports.usersDetails =model('usersDetails',userDetailsSchema)

const UsersDetails = model('usersDetails', userDetailsSchema); // Consistent naming

module.exports = UsersDetails; // Export the model