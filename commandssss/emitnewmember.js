<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.channel.send("Emitting `guildMemberAdd`").then(client.emit("guildMemberAdd", message.member))
=======
exports.run = (client, message, args) => {
    message.channel.send("Emitting `guildMemberAdd`").then(client.emit("guildMemberAdd", message.member))
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}