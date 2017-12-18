exports.run = (client, message) => message.guild.acknowledge().then(message.channel.send("Read all messages in " + message.guild.name + "!"))
