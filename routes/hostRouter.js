const express = require("express");
const path = require('path');

const HostRouter = express.Router();

const rootDir = require("../utils/pathUtil"); 


HostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','ADDHOME.html'));
});

HostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir,'views','FORMADDED.html'));
});
module.exports = HostRouter;
