import { log } from 'util';

'use strict';

const fs = require('fs');

let flyingCircusPath = `${__dirname}/data/flying-circus.txt`;

fs.flyingCircusPath(flyingCircusPath, (error,data) => {
  if(error)
    throw(error);
  console.log('======== break between ipsums ==========');
  console.log(data.toString('utf-8',0,20));

  let readFile(filePath,(error,data) => {
    if(error)
      throw error;

    console.log('======== break between ipsums ==========');
    console.log(data.toString('utf-8',0,20));    
  });
});