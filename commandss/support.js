<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.channel.send("Thank you so much for your support, we've let the devs know that you appreciate their work!")
    client.channels.get("363204236366053377").sendMessage(message.author.username + "#" + message.author.discriminator + " ID: (" +message.author.id+ ") Supports us!");
=======
exports.run = (client, message, args) => {
    message.channel.send("Thank you so much for your support, we've let the devs know that you appreciate their work!")
    client.channels.get("363204236366053377").sendMessage(message.author.username + "#" + message.author.discriminator + " ID: (" +message.author.id+ ") Supports us!");
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
                  }