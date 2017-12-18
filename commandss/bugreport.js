exports.run = (client, message, args) => {
  client.channels.get("300730441370173441").sendMessage(message.author.username + "#" + message.author.discriminator + " ID: (" +message.author.id+ ") has reported a bug: \n" + message.content.replace("A!bugreport ", ""));
                }
                