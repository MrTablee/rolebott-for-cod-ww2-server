<<<<<<< HEAD
exports.run = (client, message, args) => {
    let staffRole = (message.guild.roles.find("name", "Staff"));
        if(!message.member.roles.has(staffRole.id)) {
    message.channel.send('This command is for Staff only')
    return;
} else if(message.member.roles.has(staffRole.id)) {
    if(args[0] === 'takerole') {
        let mentionedMember = message.guild.member(message.mentions.users.first());        let roleToRemove = (message.guild.roles.find('name', args[2]));
        message.guild.member(mentionedMember.id).removeRole(roleToRemove.id)
    } else if(args[0] === 'addrole') {
        let mentionedMember = message.guild.member(message.mentions.users.first());        let roleToRemove = (message.guild.roles.find('name', args[2]));
        message.guild.member(mentionedMember.id).addRole(roleToRemove.id)
    }
=======
exports.run = (client, message, args) => {
    let staffRole = (message.guild.roles.find("name", "Staff"));
        if(!message.member.roles.has(staffRole.id)) {
    message.channel.send('This command is for Staff only')
    return;
} else if(message.member.roles.has(staffRole.id)) {
    if(args[0] === 'takerole') {
        let mentionedMember = message.guild.member(message.mentions.users.first());        let roleToRemove = (message.guild.roles.find('name', args[2]));
        message.guild.member(mentionedMember.id).removeRole(roleToRemove.id)
    } else if(args[0] === 'addrole') {
        let mentionedMember = message.guild.member(message.mentions.users.first());        let roleToRemove = (message.guild.roles.find('name', args[2]));
        message.guild.member(mentionedMember.id).addRole(roleToRemove.id)
    }
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}}