const cheerio = require('cheerio'),
        fetch = require('node-fetch');

const episodeListURL = 'http://chakoteya.net/StarTrek/episodes.htm',
      baseURL = 'http://chakoteya.net/StarTrek/';

// this is me declaring some handlers

var valuePrinter = function(value) {console.log(value)}; //function that looks into our promises to check it

var episodeListHTTPResponseHandler = response => response.text(); //no {} needed return is implied btw
var episodeListHTMLHandler = function(body) {
      var  $ = cheerio.load(body);
      var episodeListHREFs = $("a[href$='.htm']").map( (i,a) => {
          return ($(a).attr("href"))
           }).get();
      return episodeListHREFs // returns an array of episodes HREFs
};

var episodeListHREFsHandler = function(HREFs) {
    var episodeListURLs = HREFs.map( url => baseURL + url);
    return episodeListURLs;
};

// takes an ARRAY as opposed to a string
var scheduleFetchesForURLs = function(episodeListURLs) {
    var promisesForEpisodes = episodeListURLs.map(function(url) {
        return fetch(url); //returns an array of multiple promises
    });
    return promisesForEpisodes
};

// var singleEpisodeHTMLHandler = function(body) {
//       var  $ = cheerio.load(body);
//       // var episodeTitles = $("a[href$='.htm']").map( (i,a) => {
//       //     return ($(a).attr("href"))
//       //      }).get();
//       // return episodeHREFs
// };

// var titleGetter = $("title").text;

// ----------------- this is first tick <3

var eventualEpisodeURLs = fetch(episodeListURL)
    .then(episodeListHTTPResponseHandler)
    .then(episodeListHTMLHandler)
    .then(episodeListHREFsHandler);

eventualEpisodeURLs // we can name a var later, we do not know what we want to name it yet!
    .then(scheduleFetchesForURLs)
    // .then(function (butss) {
    //     butss.forEach(function(promiseForEpisodeResponse) {
    //         .then
    //     response => response.text();
    //     })
    // })

console.log('okay checking this shit out');

undefined; //stops runkit from printing extra stuff
    
