const httpStatusCodes = require("../constants/http-status-codes");
const { formResponse } = require("../utils/helper");
const bcrypt = require("bcrypt");
const UsersDetails = require("../model/userDetails.model");

function isValidEmail(email) {
  const emailRegex = /^[a-z0-9_.]+@[^\s@]+\.[a-z]{2,}$/i;
  return emailRegex.test(email);
}

exports.register = async (req, res) => {
  const { username, email, u_password, u_dob, u_phoneNo } = req.body;
  console.log(req.body)

  if (!email || !u_password) {
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

    const encryptedPassword = await bcrypt.hash(u_password, 10);

    const newusersDetails = new UsersDetails({
      username: username,
      email: email,
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



