const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const bcrypt = require("bcrypt");
const UsersDetails = require("../model/userDetails.model");
const jwt = require("jsonwebtoken")
// import mongoose from "mongoose";

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await UsersDetails.findById(userId)
        const accessToken = user.generateAccessToken()
        // const refreshToken = user.generateRefreshToken()

        user.accessToken = accessToken
        await user.save({ validateBeforeSave: false })

        return accessToken


    } catch (error) {
        console.log("Access Token Error", error.message);
        return false
    }
}

function isValidEmail(email) {
    const emailRegex = /^[a-z0-9_.]+@[^\s@]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
  }


exports.register = async (req, res) => {
    const { username, email, password, u_dob, u_phoneNo } = req.body;
    console.log(req.body)
  
    if (!email || !password) {
      return res
        .status(httpStatusCodes[400].code)
        .json(formResponse(httpStatusCodes[400].code, "missing email or password"));
    }
  
    if (password.length < 6) {
      return res
        .status(httpStatusCodes[202].code)
        .json(
          formResponse(httpStatusCodes[202].code, "password length is too short")
        );
    }
  
    if (!isValidEmail(email)) {
      return res
        .status(httpStatusCodes[202].code)
        .json(formResponse(httpStatusCodes[202].code, "not a valid email"));
    }
  
    try {
      const existingUser = await UsersDetails.findOne({ email: email });
  
      if (existingUser) {
        // User found
        return res
          .status(httpStatusCodes[200].code)
          .json(formResponse(httpStatusCodes[200].code, "User already exists"));
      }
  
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      const newusersDetails = new UsersDetails({
        username: username,
        email: email,
        password: encryptedPassword,
        u_dob: u_dob,
        u_phoneNo: u_phoneNo,
        accessToken: ""
      });
  
      await newusersDetails.save();
  
      return res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Database error' });
    }
  };
  
  

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const u_email = email;
    const u_password = password;

    if (!u_email || !u_password) {
        return res
            .status(httpStatusCodes[400].code)
            .json(formResponse(httpStatusCodes[400].code, "Missing email or password"));
    }
    var isPasswordValid = false;
    const user = await UsersDetails.findOne({ email: u_email });
    // console.log(user)

    if (user) {
        const userpwd = user.password;

        bcrypt.compare(u_password, userpwd, function(err, passwordMatch) {
            if (err) {
                console.error(err);
                return res.status(500).json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
            }
            if (passwordMatch) {
                console.log("Password matches");
                isPasswordValid = true;
            } else {
                console.log("Password doesn't match");
                return res.status(401).json(formResponse(httpStatusCodes[401].code, "password Invalid credentials"));
            }
        });
    } else {
        console.log('No data');
        return res.status(401).json(formResponse(httpStatusCodes[401].code, "user Invalid credentials"));
    }

    const accessToken = await generateAccessAndRefereshTokens(user._id)

    const options = {
        httpOnly: true,
        // secure: true,  Add In production
        sameSite: 'None',
        path: '/',
      };

    
    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(formResponse(httpStatusCodes[200].code, {user, accessToken}));
   
};


exports.getCurrentUser = async (req, res) => {
    console.log("In Current User")
    return res
    .status(200)
    .json(formResponse(httpStatusCodes[200].code, req.user))

};