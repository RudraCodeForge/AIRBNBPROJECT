//const path = require('path');
//const rootDir = require("../utils/pathUtil");
const Home = require("../models/mhomes");
const Favourite = require("../models/mfavourite");

exports.HOME = (req, res, next) => {
           Home.fetchAll((REGISTEREDHOMES) => {
                      res.render("store/Home", {
                                 pageTitle: "HOME",
                                 REGISTERHOME: REGISTEREDHOMES,
                                 CurrentPage: "HOME",
                      });
           });
};

exports.INDEX = (req, res, next) => {
           Home.fetchAll((REGISTEREDHOMES) => {
                      res.render("store/index", {
                                 pageTitle: "INDEX",
                                 REGISTERHOME: REGISTEREDHOMES,
                                 CurrentPage: "HOMELIST",
                      });
           });
};

exports.BOOKINGS = (req, res, next) => {
           res.render("store/Bookings", {
                      pageTitle: "BOOKINGS",
                      CurrentPage: "BOOKINGS",
           });
};

exports.FAVOURITELIST = (req, res, next) => {
           
           Favourite.GetToFavourite((FavouriteHomes)=>{
                      Home.fetchAll((REGISTEREDHOMES)=>{
                                 const FavouriteHomeDetails =FavouriteHomes.map(HomeId=> REGISTEREDHOMES.find(home=>home.Id===HomeId));
                                 res.render("store/FavouriteList",{
                                            pageTitle: "FAVOURITE HOMES",
                                            FavouriteHomeDetails:FavouriteHomeDetails,
                                            CurrentPage: "FAVOURITE"
                                 })
                      })
           })
};

exports.POSTFAVOURITELIST = (req, res, next) => {
           const HOMEID = req.body.Id;
           Favourite.SaveToFavourite(HOMEID, (error)=>{
                      if(error){
                                 console.log(`ERROR OCCUR IN SAVING FAVOURITE ${error}`)
                      }
                      
           })
           res.redirect("/favourite-list")
             
};

exports.HOMEDETAILS = (req, res, next) => {
           const HomeId = req.params.homeId;
           Home.findById(HomeId, (home) => {
                      if (!home) {
                                 console.log("Home not found");

                                 return res.redirect("/index");
                      } else {
                                 res.render("store/HomeDetails", {
                                            pageTitle: "HOMEDETAILS",
                                            home: home,
                                            CurrentPage: "HOMEDETAILS",
                                            HomeId: HomeId,
                                 });
                      }
           });
};

exports.POSTREMOVE = (req,res,next)=>{
           const HomeId = req.params.HomeId;
           Favourite.DeleteById(HomeId,(error)=>{
                    if (error){
                               console.log(`ERROR OCCUR IN DELETING ${error}`);
                               
                    }
                      res.redirect("/favourite-list");
           })
}
