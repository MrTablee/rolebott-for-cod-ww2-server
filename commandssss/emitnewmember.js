exports.run = (client, message, args) => {
    message.channel.send("Emitting `guildMemberAdd`").then(client.emit("guildMemberAdd", message.member))
}