'use strict';

const reader = module.exports = {};
const fs = require('fs');

let filePathsArray = [`${__dirname}/../assets/flying-circus.txt`, `${__dirname}/../assets/holy-grail.txt`, `${__dirname}/../assets/life-of-brian.txt`];

// let flyingCircusPath = `${__dirname}/../assets/flying-circus.txt`;
// let holyGrailPath = `${__dirname}/../assets/holy-grail.txt`;
// let lifeOfBrianPath = `${__dirname}/../assets/life-of-brian.txt`;  
// let filePathsArray2 = [flyingCircusPath, holyGrailPath, lifeOfBrianPath];

reader.readFile = (callback) => {
  fs.readFile(filePathsArray[0], (error,data) => {
    if(error)
      callback(error);
    fs.readFile(filePathsArray[1], (error,data) => {
      if(error)
        callback(error);
      fs.readFile(filePathsArray[2], (error,data) => {
        if(error)
          callback(error);  
        callback(null,data.toString('utf-8',0,50));
      });  
      callback(null,data.toString('utf-8',0,50));
    });  
    callback(null,data.toString('utf-8',0,50));
  });
};