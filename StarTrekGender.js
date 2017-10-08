var request = require("request");
var cheerio = require("cheerio");

var baseURL = 'http://chakoteya.net/StarTrek/', // change Star Trek to variable
htm = '.htm',
episodeArr = [];

// created an array of episode URLs from Star Trek TOS
for (let episodeNumber = 1; episodeNumber <= 79; episodeNumber++) {
        var episodeName = baseURL + episodeNumber + htm;
        episodeArr.push(episodeName);
};

//created function requestEpisodeURL
function requestEpisodeURL(_, episodeNumber) {
    request(episodeArr[episodeNumber], function (error, response, body) {
        if (error || response.statusCode !== 200) {
            console.log('Code Red');
        } else {

        // load page into cheerio
        $ = cheerio.load(body);

        // turned keywords meta attribute into string
        var meta = $("meta[http-equiv='keywords']").attr("content");

        var arr = new Array();
        arr = meta.split(', ');
        console.log(arr);

        // because arrays start at 0 for the correct number I need add 1 for the actual number
        var episodeNumberActual = episodeNumber + 1;
        console.log(episodeNumberActual);
    }
 }
)};

episodeArr.forEach(requestEpisodeURL); //fix request body
// eventually turn this into .map
