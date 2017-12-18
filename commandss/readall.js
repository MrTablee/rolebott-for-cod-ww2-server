<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.guild.acknowledge().then(message.channel.send("Read all messages in " + message.guild.name + "!"))
=======
exports.run = (client, message, args) => {
    message.guild.acknowledge().then(message.channel.send("Read all messages in " + message.guild.name + "!"))
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
  }