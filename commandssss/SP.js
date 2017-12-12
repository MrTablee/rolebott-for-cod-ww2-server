exports.run = (client, message, args) => {
    var changed = message.content.replace("..SP ", "")
        if (message.author.id == '233366720062947330') {
            client.user.setGame(changed)
            message.channel.send('Set playing to: `' + changed + '`')
            setTimeout(() => {
                client.user.setGame("..help | in " + client.guilds.size + " servers!")
            }, 3600000);
        }
    }