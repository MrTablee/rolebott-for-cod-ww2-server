<<<<<<< HEAD
const search = require('youtube-search');
let prefix = "A!";
var opts = {
    maxResults: 1,
    key: 'API_KEY'}
exports.run = (client, message, args) => {
    search(message.content.replace(prefix+"yt ", ""), opts, function(err, results) {
        message.channel.sendMessage(results[0].link)
    });
=======
const search = require('youtube-search');
let prefix = "A!";
var opts = {
    maxResults: 1,
    key: 'API_KEY'}
exports.run = (client, message, args) => {
    search(message.content.replace(prefix+"yt ", ""), opts, function(err, results) {
        message.channel.sendMessage(results[0].link)
    });
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}