const { Router } = require("express");

const { login, register, getCurrentUser } = require("../controllers/auth.controller");
const { verifyJWT } = require("../middlewares/auth.middleware");
const express = require("express");

const app = express();
const auth = Router();

auth.post("/api/v1/login", login);
auth.post("/api/v1/register", register);
auth.get("/api/v1/currentUser",verifyJWT, getCurrentUser)

module.exports = auth;