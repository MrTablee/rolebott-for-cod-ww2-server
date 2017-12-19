const search = require('youtube-search');

const prefix = '..';
const opts = {
    maxResults: 1,
    key: 'AIzaSyAJto0Vilt5bCmyVZKaSqtTj4PJkAt7VbU'
};

exports.run = (client, message) => {
    search(message.content.replace(prefix + 'yt ', ''), opts, function(err, results) {
        message.channel.sendMessage(results[0].link);
    });
};