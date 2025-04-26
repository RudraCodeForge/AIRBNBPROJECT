//const path = require('path');
//const rootDir = require("../utils/pathUtil");
const Home = require("../models/mhomes");

exports.ADDHOME = (req, res, next) => {
           res.render("ADDHOME", { pageTitle: "REGISTER YOUR HOME" });
};

exports.POSTADDHOME = (req, res, next) => {
           const { Profile, Name, Location, Price, Ratings } = req.body;
           const home = new Home(Profile, Name, Location, Price, Ratings);
           home.save();
           res.render("FORMADDED", {
                      pageTitle: "FORM SUBMITTED",
           });
};

exports.HOME = (req, res, next) => {
           Home.fetchAll((REGISTEREDHOMES) => {
                      res.render("Home", { pageTitle: "HOME", REGISTERHOME:REGISTEREDHOMES});
           });
};
