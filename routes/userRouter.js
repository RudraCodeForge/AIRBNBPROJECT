const express = require("express");
const UserRouter = express.Router();

const UserController = require('../controllers/home');

UserRouter.get("/",UserController.HOME);
module.exports = UserRouter;
