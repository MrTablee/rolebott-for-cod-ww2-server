exports.run = (client, message, args) => {
    let modRole = message.guild.roles.find("name", "Mod");
  let guild = message.member.guild;
  let muteRole = (guild.roles.find("name", "Muted"));
    if(!message.member.roles.has(modRole.id)) {
    return message.channel.send('You need the role `Mod` to use this command.');
    }
    if(message.mentions.users.size === 0) {
        return message.channel.send("Well you don't expect me to mute **nobody**, do you?");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
        return message.channel.send("That user doesn't seem to be around...");
    }
    muteMember.addRole(muteRole.id).then(member => {
        message.channel.send(`Guess what, ${member.user.username}? You've been muted! So shut up :wink:`)
    })
}