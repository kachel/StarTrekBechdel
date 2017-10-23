const request = require("request"),
      cheerio = require("cheerio");

const baseURL = 'http://chakoteya.net/StarTrek/', // change Star Trek to variable
      episodes = [];

// created an array of episode URLs from Star Trek TOS
for (let episodeNumber = 1; episodeNumber <= 79; episodeNumber++)
  episodes.push(baseURL + episodeNumber + '.htm');

// .forEach callback signature needed two parameters
const requestEpisodeURL = function(_, episodeNumber) {

    const handleEpisodeResponse = function (error, response, body) {
        if (error || response.statusCode !== 200) {
            console.log('Red alert! Response code: ' + response.statusCode);
        } else {

        //the episode object
        const it = {};

        // load page into cheerio
        $ = cheerio.load(body);

        // turned keywords meta attribute into string
        const keywordsText = $("meta[http-equiv='keywords']").attr("content");

        const keywords = [];
        keywords = keywordsText.split(', ');
        console.log(keywords);

        }
    }; // handleEpisodeResponse()

    request(episodes[episodeNumber], handleEpisodeResponse);
};


episodes.forEach(requestEpisodeURL); //fix request body
// eventually turn this into .map
