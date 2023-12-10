const { Router } = require("express");

const { addVilla, displayVilla } = require("../controllers/villaDetails.controller");
const express = require("express");

const app = express();
const villaDetailsRouter = Router();

villaDetailsRouter.post("/api/v1/villa/add", addVilla);
villaDetailsRouter.post("/api/v1/villa/display", displayVilla);

module.exports = villaDetailsRouter;