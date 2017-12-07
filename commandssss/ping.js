exports.run = (client, message, args) => {
    message.channel.send("On second, rushing B...").then(m => {
    m.edit(":ping_pong: Objective time: " + (m.createdTimestamp - message.createdTimestamp) + 'ms')});
}
