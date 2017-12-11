exports.run = (client, message, args) => {
    let modRole = message.guild.roles.find("name", "Mod");
    if(!message.member.roles.has(modRole.id)) {
    return message.channel.send('You need the role `Mod` to use this command.');
    }
  
    if(message.mentions.users.size === 0) {
        return message.channel.send("Well you don't expect me to ban **nobody**, do you?");
    }
  
    let banMember = message.guild.member(message.mentions.users.first());
  
    if (!banMember) {
        return message.channel.send("That user doesn't seem to be around...");
    }
  
    banMember.ban().then(member => {
        message.channel.send(`I DROPPED DA BAN HAMMER ON ${member.user.username} MWAHAHAHAHAHAHAHA`)
    })
  }