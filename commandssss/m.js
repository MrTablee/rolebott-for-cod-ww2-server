exports.run = (client, message, args) => {
    const staffRole = (message.guild.roles.find('name', 'Staff'));
    if (!message.member.roles.has(staffRole.id)) {
        message.channel.send('This command is for Staff only');
        return;
    } else if (message.member.roles.has(staffRole.id)) {
        if (args[0] === 't') {
            const mentionedMember = message.guild.member(message.mentions.users.first());
            const roletoRemove = (message.guild.roles.find('name', args[2]));
            message.guild.member(mentionedMember.id).removeRole(roletoRemove.id);
        } else if (args[0] === 'a') {
            const mentionedMember = message.guild.member(message.mentions.users.first());
            const roletoRemove = (message.guild.roles.find('name', args[2]));
            message.guild.member(mentionedMember.id).addRole(roletoRemove.id);
        }
    }
};
