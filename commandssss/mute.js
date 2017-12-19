exports.run = (client, message) => {
    const canMute = message.guild.member(message.author.id).hasPermission('KICK_MEMBERS');
    const guild = message.member.guild;
    const muteRole = (guild.roles.find('name', 'Muted'));
    if (!canMute) {
        return message.channel.send('You need proper permissions to use this command.');
    }
    if (message.mentions.users.size === 0) {
        return message.channel.send('Well you don\'t expect me to mute **nobody**, do you?');
    }
    const muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
        return message.channel.send('That user doesn\'t seem to be around...');
    }
    muteMember.addRole(muteRole.id).then(member => {
        message.channel.send(`Guess what, ${member.user.username}? You've been muted! So shut up :wink:`);
    });
};