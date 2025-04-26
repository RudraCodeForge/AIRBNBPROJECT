const express = require("express");
const HostRouter = express.Router();

const HostController = require('../controllers/home');

HostRouter.get("/add-home", HostController.ADDHOME );

HostRouter.post("/sucess",HostController.POSTADDHOME);
module.exports = HostRouter;
