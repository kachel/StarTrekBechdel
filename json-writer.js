const fs = require('fs'),
      path = require('path');

let mozilla =  {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};

let show = 'Voyager'
  , episode = '3x02';

JSON.stringify();

var absolutePath = path.join(__dirname, 'database', show, episode + '.json');

console.log(absolutePath);

//let episodeData = '...';
//needs to contain JSON string

fs.writeFile(absolutePath, JSON.stringify(mozilla, null, 2) + "\n", function(err) {
  if (err) console.log('Error');
  console.log('The file has been added.');
});
