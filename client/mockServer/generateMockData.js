/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */
const jsf = require('json-schema-faker')
  , mockDataSchema = require('./schema')
  , fs = require('fs')

const json = JSON.stringify(jsf(mockDataSchema))
  , dir = './tmp';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

fs.writeFile('./tmp/db.json', json, function (err) {
  if (err) {
    return console.log(err)
  } else {
    console.log('Mock data generated.')
  }
})
