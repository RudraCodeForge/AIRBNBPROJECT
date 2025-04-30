const express = require("express");
const UserRouter = express.Router();

const StoreController = require('../controllers/StoreController');

UserRouter.get("/",StoreController.HOME);
UserRouter.get("/bookings",StoreController.BOOKINGS);
UserRouter.get("/favourite-list", StoreController.FAVOURITELIST);
UserRouter.get("/index",StoreController.INDEX);
UserRouter.get("/details/:homeId",StoreController.HOMEDETAILS);
UserRouter.post("/favourite-list", StoreController.POSTFAVOURITELIST);
UserRouter.post("/remove-list/:HomeId", StoreController.POSTREMOVE);
module.exports = UserRouter;
