const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const bcrypt = require("bcrypt");
const usersDetails = require("../model/userDetails.model");

exports.login = async (req, res) => {
    const { u_email, u_password } = req.body;
    console.log(req.body)
    const email = u_email;
    const password = u_password;

    if (!email || !password) {
        return res
            .status(httpStatusCodes[400].code)
            .json(formResponse(httpStatusCodes[400].code, "Missing email or password"));
    }

    try {
        // Assuming 'users' is the MongoDB collection
        const user = await usersDetails.findOne({ u_email: email });
        
        if (user) {
            const userpwd = user.u_password;

            bcrypt.compare(password, userpwd, function(err, passwordMatch) {
                if (err) {
                    console.error(err);
                    return res.status(500).json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
                }
                if (passwordMatch) {
                    console.log("Password matches");
                    return res.status(200).json(formResponse(httpStatusCodes[200].code, "User Logged in"));
                } else {
                    console.log("Password doesn't match");
                    return res.status(401).json(formResponse(httpStatusCodes[401].code, "Invalid credentials"));
                }
            });
        } else {
            console.log('No data');
            return res.status(401).json(formResponse(httpStatusCodes[401].code, "Invalid credentials"));
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json(formResponse(httpStatusCodes[500].code, "Internal Server Error"));
    }
};
