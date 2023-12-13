const { get } = require('node:https');

const baseUrl = 'https://www.asterank.com/';
const queryStr = `${baseUrl}/api/kepler?query={"TPLANET":{"$lt":320,"$gt":290}}&limit=10`;
get(queryStr, res => {
  res.on('data', chunk => {
    console.log(chunk);
  });
});
