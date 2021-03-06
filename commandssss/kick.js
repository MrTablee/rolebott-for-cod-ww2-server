exports.run = (client, message) => {
    const canKick = message.guild.member(message.author.id).hasPermission('KICK_MEMBERS');

    if ((!canKick) && message.author.id !== '233366720062947330') {
        return message.channel.send('You need the permission `KICK_MEMBERS` to use this command.');
    }

    if (message.mentions.users.size === 0) {
        return message.channel.send('Well you don\'t expect me to kick **nobody**, do you?');
    }

    const kickMember = message.guild.member(message.mentions.users.first());

    if (!kickMember) {
        return message.channel.send('That user doesn\'t seem to be around...');
    }

    kickMember.kick().then(member => {
        message.channel.send(`${member.user.username} was kicked from the server... Bye bye`).then(client.channels.get(message.guild.channels.find('name', 'logs').id).send('Test'));
    });
};