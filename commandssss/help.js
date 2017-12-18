exports.run = (client, message, args) => {
    if (!args) {
        message.channel.send('**DMing you a list of commands!**')
        message.author.sendEmbed({
            color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
            description: "Commands:\n**r!ping:** Sends the current ping time of the bot.\n**r!help:** Sends this message to your DMs.\n**r!addrole:** Adds a role to you.\n**r!takerole:** Takes a role from you.\n**r!manual**(*Staff only*) Manually adds a role to a user."
        });
    }
    if (args[0] == 'test') {
        message.channel.send('Test failed')
    }















}