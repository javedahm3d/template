const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const bcrypt = require("bcrypt");
const usersDetails = require("../model/userDetails.model");

function isValidEmail(email) {
  const emailRegex = /^[a-z0-9_.]+@[^\s@]+\.[a-z]{2,}$/i;
  return emailRegex.test(email);
}

exports.register = async (req, res) => {
  const { u_name, u_email, u_password, u_dob, u_phoneNo } = req.body;
  console.log(req.body)

  if (!u_email || !u_password) {
    return res
      .status(httpStatusCodes[400].code)
      .json(formResponse(httpStatusCodes[400].code, "missing email or password"));
  }

  if (u_password.length < 6) {
    return res
      .status(httpStatusCodes[202].code)
      .json(
        formResponse(httpStatusCodes[202].code, "password length is too short")
      );
  }

  if (!isValidEmail(u_email)) {
    return res
      .status(httpStatusCodes[202].code)
      .json(formResponse(httpStatusCodes[202].code, "not a valid email"));
  }

  try {
    const existingUser = await usersDetails.findOne({ u_email: u_email });

    if (existingUser) {
      // User found
      return res
        .status(httpStatusCodes[200].code)
        .json(formResponse(httpStatusCodes[200].code, "User already exists"));
    }

    const encryptedPassword = await bcrypt.hash(u_password, 10);

    const newusersDetails = new usersDetails({
      u_name: u_name,
      u_email: u_email,
      u_password: encryptedPassword,
      u_dob: u_dob,
      u_phoneNo: u_phoneNo,
    });

    await newusersDetails.save();

    return res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Database error' });
  }
};



