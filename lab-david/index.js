'use strict';

const fs = require('fs');

let flyingCircusPath = `${__dirname}/data/flying-circus.txt`;
let holyGrailPath = `${__dirname}/../assets/holy-grail.txt`;
let lifeOfBrianPath = `${__dirname}/../assets/life-of-brian.txt`;  

fs.flyingCircusPath(flyingCircusPath, (error,data) => {
  if(error)
    throw(error);
  console.log('======== break between ipsums ==========');
  console.log(data.toString('utf-8',0,50));

  let readFile(filePath,(error,data) => {
    if(error)
      throw error;

    console.log('======== break between ipsums ==========');
    console.log(data.toString('utf-8',0,50));    
  });
});