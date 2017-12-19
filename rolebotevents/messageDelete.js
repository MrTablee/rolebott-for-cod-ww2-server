exports.run = (rolebotclient, message) => {
        try {
            rolebotclient.channels.get(message.guild.channels.find('name', 'logs').id).sendEmbed({
                color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
                description: `**Message Author:** ${message.author.tag}\n**Message Content:** ${message.content}\n**Message Channel:** ${message.channel.name}`});
        } catch (err) {
            rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err.stack}\`\`\``);
        }
}
