// two libraries used: request and cheerio

var request = require('request'),
cheerio = require('cheerio'),
pageURL = 'http://chakoteya.net/StarTrek/6.htm';


request(pageURL, function (error, response, body) {
  if (error || response.statusCode !== 200) {
  console.log('Code Red');
  }

 else {
    $ = cheerio.load(body);
    // load page into cheerio

    var meta = $("meta[http-equiv='keywords']").attr("content");
    // turned keywords meta attribute into string

    //console.log(meta);
    var arr = new Array();
    arr = meta.split(', ');
    console.log(arr);
    }

  });

// episode loop code
// needs to be turned into a function
// so that I can combine it with the code above


var baseURL = 'http://chakoteya.net/StarTrek/',
htm = '.htm',
episodeURL,
episodeNumber;

for (episodeNumber = 1; episodeNumber <= 79; episodeNumber++) {
   var episodeName = baseURL + episodeNumber + htm;
   console.log(episodeName);
   };
