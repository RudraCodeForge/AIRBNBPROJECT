const express = require("express");

const HostRouter = express.Router();

HostRouter.get("/add-home", (req, res, next) => {
  res.send(`<form action="/host/add-home" method="POST">
    <input type="text" name="Name" placeholder="ENTER YOUR HOME NAME">
    <br/><br/>
    <input type="text" name="Location" placeholder="ENTER YOUR HOME LOCATION">
    <br/><br/>
    <input type="submit" value="ADD HOME">`);
});

HostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`<h1>HOME ADDED SUCCESSFULLY</h1>
    <a href="/">GO TO HOME</a>`);
});
module.exports = HostRouter;
