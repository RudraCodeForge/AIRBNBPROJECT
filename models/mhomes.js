const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const filePath = path.join(rootDir, "data", "home.json");
const Favourite = require("./mfavourite");

module.exports = class Home {
  constructor(HouseImg,HouseName,HouseLocation,HousePrice,HouseRatings,Id)   {
    this.Image = HouseImg;
    this.Name = HouseName;
    this.Location = HouseLocation;
    this.Price = HousePrice;
    this.Ratings = HouseRatings;
    this.Id = Id;
  }

  save() {
    
    Home.fetchAll((REGISTEREDHOMES) => {
      if(this.Id){
        REGISTEREDHOMES = REGISTEREDHOMES.map(home=>
          home.Id=== this.Id ?  this : home)
      }
      else{
        this.Id = Math.random().toString();
        REGISTEREDHOMES.push(this);
      }
      
      fs.writeFile(
        filePath,
        JSON.stringify(REGISTEREDHOMES),(err)=>{
          console.log(`ERROR OCCUR IN FILE WRITING ${err}`)
        }
      );
    });
  }

  static fetchAll(callback) {
    fs.readFile(filePath, (err, filedata) => {
      if (!err) {
        callback(JSON.parse(filedata));
      } else {
        console.log(`ERROR OCCUR IN FILE READING ${err}`);
        callback([]);
      }
    });
  }
  
  static findById(HomeId,callback){
    Home.fetchAll((HOMEFOUND)=>{
      const Home = HOMEFOUND.find(home=>home.Id===HomeId);
      callback(Home);
    })
  }

  static DeleteById(HomeId,callback){
    Home.fetchAll((HOMEFOUND)=>{
      const Homes = HOMEFOUND.filter(home=>home.Id !==HomeId);
      Favourite.DeleteById(HomeId,(error)=>{
        console.log(`ERROR OCCUR IN DELETING HOME FOR FAVOURITE LIST ${error}`)
      })
      fs.writeFile(
        filePath,
        JSON.stringify(Homes),callback);
    })
  }
};
