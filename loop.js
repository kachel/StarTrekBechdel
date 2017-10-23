var baseURL = 'http://chakoteya.net/StarTrek/',
htm = '.htm',
episodeArr = [];

for (let episodeNumber = 1; episodeNumber <= 79; episodeNumber++) {
        var episodeName = baseURL + episodeNumber + htm;
        episodeArr.push(episodeName);
};

console.log(episodeArr);
