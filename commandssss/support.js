exports.run = (client, message, args) => {
    message.channel.send("Thank you so much for your support, we've let the devs know that you appreciate their work!")
    client.channels.get("377696079887597568").sendMessage(message.author.username + "#" + message.author.discriminator + " ID: (" +message.author.id+ ") Supports us!");
                  }