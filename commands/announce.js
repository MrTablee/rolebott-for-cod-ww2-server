exports.run = (client, message, args) => {
  const botAdmin = message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880'
  var changed = message.content.replace("A!announce ", "")
      if (message.author.id == '233366720062947330') {
          client.user.setGame(changed)
          message.channel.send('Announced in playing : `' + changed + '`')
          setTimeout(() => {
              client.user.setGame("A!help | in " + client.guilds.size + " servers!")
          }, 3600000);
      } else {
          message.channel.send('This is above your pay grade. (Patron Pros only)')
      }
  }