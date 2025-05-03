const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

const filePath = path.join(rootDir, "data", "home.json");
const Favourite = require("./mfavourite");

const {getDB} = require('../utils/databaseUtil');
const { ObjectId } = require('mongodb');

module.exports = class Home {
  constructor(HouseImg,HouseName,HouseLocation,HousePrice,HouseRatings,_id)   {
    this.Image = HouseImg;
    this.Name = HouseName;
    this.Location = HouseLocation;
    this.Price = HousePrice;
    this.Ratings = HouseRatings;
    if(_id){
      this._id = _id;
    }
  }

  save() {
    const db = getDB();
    if(this._id){
      const {_id,...rest}=this;
      console.log("Home updated successfully")
      return db.collection('homes').updateOne({_id: new ObjectId(String(this._id))},{$set: rest});
    }
    else{
      return db.collection('homes').insertOne(this);
      }
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('homes').find().toArray();
  }
  
  static findById(HomeId){
    const db = getDB();
    return db.collection('homes').findOne({_id: new ObjectId(String(HomeId))});
  }

  static DeleteById(HomeId){
    const db = getDB();
    return db.collection('homes').deleteOne({_id: new ObjectId(String(HomeId))});
  }
};
