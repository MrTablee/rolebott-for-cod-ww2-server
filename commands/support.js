exports.run = (client, message, args) => {
    let X = 0
    message.channel.send("Thank you so much for your support, we've let the devs know that you appreciate their work!")
    client.channels.get("363204236366053377").sendMessage(message.author.username + "#" + message.author.discriminator + " ID: (" +message.author.id+ ") Supports us! Current Supporters: " + X);
                  }