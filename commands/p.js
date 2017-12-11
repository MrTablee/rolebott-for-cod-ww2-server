exports.run = (client, message, args) => {
    message.channel.sendMessage("Pinging...").then(m => {
 m.edit(":ping_pong: Time taken: " + (m.createdTimestamp - message.createdTimestamp) + 'ms')
            });
    }