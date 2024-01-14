const { Router } = require("express");

const { addVilla, displayVilla, displayVillaDetails} = require("../controllers/villaDetails.controller");
const express = require("express");

const app = express();
const villaDetailsRouter = Router();

villaDetailsRouter.post("/api/v1/villa/add", addVilla);
villaDetailsRouter.get("/api/v1/villa/display", displayVilla);
villaDetailsRouter.get("/api/v1/villa/displayVillaDetails", displayVillaDetails);

module.exports = villaDetailsRouter;