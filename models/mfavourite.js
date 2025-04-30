const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");


const filePath = path.join(rootDir, "data", "Favourite.json");

module.exports = class Favourite{

  static SaveToFavourite(Id,callback){
    Favourite.GetToFavourite((FavouriteHomes)=>{
      if(FavouriteHomes.includes(Id)){
        console.log(`ALREADY ADDED TO FAVOURITE`);
      }
      else{
        FavouriteHomes.push(Id);
        fs.writeFile(filePath,JSON.stringify(FavouriteHomes),callback);
      }
    })
  };
  
  static GetToFavourite(callback){
   fs.readFile(filePath, (err, filedata) => {
      if (!err) {
        callback(JSON.parse(filedata));
      } else {
        console.log(`ERROR OCCUR IN FILE READING ${err}`);
        callback([]);
      }
    }); 
  };

  static DeleteById(HomeId,callback){
    Favourite.GetToFavourite((FavouriteFound)=>{
      const Homes = FavouriteFound.filter(home=>home !==HomeId);
      fs.writeFile(
        filePath,
        JSON.stringify(Homes),callback);
    })
  }
  
};
