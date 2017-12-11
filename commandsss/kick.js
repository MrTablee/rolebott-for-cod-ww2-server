exports.run = (client, message, args) => {
    let modRole = message.guild.roles.find("name", "Mod");
    if((!message.member.roles.has(modRole.id)) && message.author.id !== '233366720062947330' ) {
    return message.channel.send('You need the role `Mod` to use this command.');
    }
    if(message.mentions.users.size === 0) {
        return message.channel.send("Well you don't expect me to kick **nobody**, do you?");
    }
    let kickMember = message.guild.member(message.mentions.users.first());
    if (!kickMember) {
        return message.channel.send("That user doesn't seem to be around...");
    }
    kickMember.kick().then(member => {
        message.channel.send(`${member.user.username} was kicked from the server... Bye bye`)
    })
}