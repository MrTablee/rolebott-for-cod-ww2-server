exports.run = (client, message, args) => {
    const canKick = message.guild.member(message.author.id).hasPermission('KICK_MEMBERS');
    
        if ((!canKick) && message.author.id !== '233366720062947330') {
            return message.channel.send('You need the permission `KICK_MEMBERS` to use this command.');
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