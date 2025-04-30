//const path = require('path');
//const rootDir = require("../utils/pathUtil");
const Home = require("../models/mhomes");

exports.HOSTHOME = (req, res, next) => {
           Home.fetchAll((REGISTEREDHOMES) => {
                      res.render("host/HostHomeList", {
                                 pageTitle: "HOSTHOME",
                                 REGISTERHOME: REGISTEREDHOMES,
                                 CurrentPage: "HOSTHOME",
                      });
           });
};

exports.ADDHOME = (req, res, next) => {
           res.render("host/EditHome", {
                      pageTitle: "REGISTER YOUR HOME",
                      CurrentPage: "ADDHOME",
                      Editing:false,
           });
};

exports.POSTADDHOME = (req, res, next) => {
           const { Profile, Name, Location, Price, Ratings } = req.body;
           const home = new Home(Profile, Name, Location, Price, Ratings);
           home.save();
           res.render("host/FORMADDED", {
                      pageTitle: "FORM SUBMITTED",
                      CurrentPage: "Submitted",
           });
};

exports.HOSTEDITHOME = (req, res, next) => {
           const HomeId = req.params.HomeId;
           const editing = req.query.editing === "true";
           Home.findById(HomeId, (Home) => {
                      if (!Home) {
                                 console.log("Home not found");
                                 return res.redirect("/host/Home")
                      } else {
                                 console.log("Home Found");
                                 res.render("host/EditHome", {
                                            pageTitle: "HOSTEDITHOME",
                                            CurrentPage: "HOSTHOME",
                                            Home: Home,
                                            Editing: editing,
                                 });
                      }
           });
};
exports.POSTEDITHOME = (req,res,next)=>{
              const { Id, Profile, Name, Location, Price, Ratings } = req.body;
              const home = new Home(Profile, Name, Location, Price, Ratings,Id); // Create a new Home object with the updated data
              home.save();
              res.redirect("/host/Home")
}

exports.POSTDELETEHOME = (req,res,next)=>{
           const Id = req.params.HomeId;
           Home.DeleteById(Id,(error)=>{
                      if(error){
                                 console.log(`ERROR OCCUR IN FILE DELETING ${error}`);
                      }
                      res.redirect("/host/Home");
           });
           
}