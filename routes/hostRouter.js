const express = require("express");
const HostRouter = express.Router();

const HostController = require('../controllers/HostController');

HostRouter.get("/add-home", HostController.ADDHOME );

HostRouter.post("/sucess",HostController.POSTADDHOME);
HostRouter.get("/Home", HostController.HOSTHOME);
HostRouter.get("/EditHome/:HomeId", HostController.HOSTEDITHOME);
HostRouter.post("/EditHome", HostController.POSTEDITHOME);
HostRouter.post("/DeleteHome/:HomeId", HostController.POSTDELETEHOME);
module.exports = HostRouter;

