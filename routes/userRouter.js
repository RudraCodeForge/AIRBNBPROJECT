const express = require("express");
const path = require("path");
const UserRouter = express.Router();

const rootDir = require("../utils/pathUtil"); 

UserRouter.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

UserRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "HOSTHOME.html"));
});
module.exports = UserRouter;
