const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
// const { ApiError } = require("../utils/Apierror");
const UsersDetails = require("../model/userDetails.model");
const jwt = require("jsonwebtoken");

exports.verifyJWT = async (req, res, next) => {
    try {
        const token = await req.cookies?.accessToken

        console.log("In Middleware, Token :- ", req.cookies);
        
        // console.log(token);
        if (!token) {
            console.log("Unauthorized request")
            return res
    .status(401)
    .json(formResponse(httpStatusCodes[401].code, "Token Not found"))
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log({decodedToken})
    
        const user = await UsersDetails.findById(decodedToken?._id).select("-password -accesstoken")
    
        if (!user) {
            console.log("Invalid Access Token")
        }
    
        req.user = user;
        next()
    } catch (error) {
        console.log(error)
    }
    
}