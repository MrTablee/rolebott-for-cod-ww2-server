exports.run = (client, message) => {
    message.channel.send('Emitting `guildMemberAdd`').then(client.emit('guildMemberAdd', message.member));
};