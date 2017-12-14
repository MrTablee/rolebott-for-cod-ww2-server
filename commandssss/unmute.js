exports.run = (client, message, args) => {
let canMute = message.guild.member(message.author.id).hasPermission('KICK_MEMBERS');
  let guild = message.member.guild;
  let muteRole = (guild.roles.find("name", "Muted"));
    if(!canMute) {
    return message.channel.send('You need proper permissions to use this command.');
    }
    if(message.mentions.users.size === 0) {
        return message.channel.send("Well you don't expect me to unmute **nobody**, do you?");
    }
    let muteMember = message.guild.member(message.mentions.users.first());
    if (!muteMember) {
        return message.channel.send("That user doesn't seem to be around...");
    }
    muteMember.removeRole(muteRole.id).then(member => {
        message.channel.send(`Ayeeee, ${member.user.username} can talk again! You've been unmuted! :wink:`)
    })
}
