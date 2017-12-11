exports.run = (client, message, args) => {
    message.channel.send("Pinging...").then(m => {
    m.edit(":ping_pong: Time taken: " + (m.createdTimestamp - message.createdTimestamp) + 'ms')});
}