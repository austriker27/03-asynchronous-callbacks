'use strict';

const reader = module.exports = {};
const fs = require('fs');

reader.readFile = (callback) => {
  let flyingCircusPath = `${__dirname}/../assets/flying-circus.txt`;
  let holyGrailPath = `${__dirname}/../assets/grail-path.txt`;
  let lifeOfBrianPath = `${__dirname}/../assets/life-of-brian.txt`;  
  fs.readFile(flyingCircusPath, (error,data) => {
    if(error)
      callback(error);

    callback(null,data.toString('utf-8',0,50));  
  });
};