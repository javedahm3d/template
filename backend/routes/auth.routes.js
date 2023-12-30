const { Router } = require("express");

const { login } = require("../controllers/login.controller");
const { register } = require("../controllers/register.controller");
const express = require("express");

const app = express();
const auth = Router();

auth.post("/api/v1/login", login);
auth.post("/api/v1/register", register);

module.exports = auth;