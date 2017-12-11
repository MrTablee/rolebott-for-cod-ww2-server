exports.run = (client, message, args) => {
    message.channel.send("***" + message.author.username + " just dabbed***")
    message.delete()
  }