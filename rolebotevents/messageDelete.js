exports.run = (atlasclient, message) => {
        try {
            atlasclient.channels.get(message.guild.channels.find('name', 'logs').id).sendEmbed({
                color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
                description: `__**MESSAGE DELETED**__\n\n**Message Author:** ${message.author.tag}\n**Message Content:** ${message.content}\n**Message Channel:** ${message.channel.name}`});
        } catch (err) {
            atlasclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err.stack}\`\`\``);
        }
}
