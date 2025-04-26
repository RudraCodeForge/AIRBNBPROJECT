const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const filePath = path.join(rootDir, "data", "home.json");

module.exports = class Home {
  constructor(HouseImg,HouseName,HouseLocation,HousePrice,HouseRatings)   {
    this.Image = HouseImg;
    this.Name = HouseName;
    this.Location = HouseLocation;
    this.Price = HousePrice;
    this.Ratings = HouseRatings;
  }

  save() {
    Home.fetchAll((REGISTEREDHOMES) => {
      REGISTEREDHOMES.push(this);
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
};
