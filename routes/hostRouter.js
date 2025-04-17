const express = require("express");
const path = require('path');

const HostRouter = express.Router();

HostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','ADDHOME.html'));
});

HostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','views','FORMADDED.html'));
});
module.exports = HostRouter;
