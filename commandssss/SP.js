exports.run = (client, message, args) => {
    var changed = args[0]
    if (message.author.id == '233366720062947330') {
        client.user.setGame(changed)
        message.channel.send('Set playing to: `' + changed + '`')
        setTimeout(() => {
            client.user.setGame("r!help | in " + client.guilds.size + " servers!")
        }, 3600000);
    }
}