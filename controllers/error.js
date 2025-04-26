const path = require('path');
const rootDir = require("../utils/pathUtil"); 

exports.PAGENOTFOUND = (req, res, next) => {
  res
    .status(404)
    .render("404NOTFOUND",
            {pageTitle:"page not found"}
             );
};