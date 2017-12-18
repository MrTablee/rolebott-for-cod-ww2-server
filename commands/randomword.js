exports.run = (client, message, args) => {
    const randomWord = require('random-word');
    message.channel.send(randomWord())
}