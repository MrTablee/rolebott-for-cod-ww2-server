<<<<<<< HEAD
exports.run = (client, message, args) => {
    let guild = message.guild
    let guestRole = (guild.roles.find("name", "Guest"));    
    let pcRole = (guild.roles.find("name", "PC"));    
    let ps4Role = (guild.roles.find("name", "PS4"));    
    let xboxRole = (guild.roles.find("name", "Xbox"));    
    
    message.channel.sendMessage("What role did ya want taken?")
    .then(() => {
      message.channel.awaitMessages(response => response.content === 'PC' || response.content === 'Xbox' || response.content === 'PS4', {
        max: 1,
        maxMatches: 5,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
          if (collected.first().content === 'PC') { 
            message.channel.send('Took the PC role from ya');
            message.guild.member(message.author.id).removeRole(pcRole.id)
        }
          if (collected.first().content === 'Xbox') { 
            message.channel.send('Took the Xbox role from ya');
            message.guild.member(message.author.id).removeRole(xboxRole.id)
        }
          if (collected.first().content === 'PS4') { 
            message.channel.send('Took the PS4 role from ya');
            message.guild.member(message.author.id).removeRole(ps4Role.id)
        }
    })
        .catch(() => {
          message.channel.send('No roles were mentioned...');
        });
    });
=======
exports.run = (client, message, args) => {
    let guild = message.guild
    let guestRole = (guild.roles.find("name", "Guest"));    
    let pcRole = (guild.roles.find("name", "PC"));    
    let ps4Role = (guild.roles.find("name", "PS4"));    
    let xboxRole = (guild.roles.find("name", "Xbox"));    
    
    message.channel.sendMessage("What role did ya want taken?")
    .then(() => {
      message.channel.awaitMessages(response => response.content === 'PC' || response.content === 'Xbox' || response.content === 'PS4', {
        max: 1,
        maxMatches: 5,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
          if (collected.first().content === 'PC') { 
            message.channel.send('Took the PC role from ya');
            message.guild.member(message.author.id).removeRole(pcRole.id)
        }
          if (collected.first().content === 'Xbox') { 
            message.channel.send('Took the Xbox role from ya');
            message.guild.member(message.author.id).removeRole(xboxRole.id)
        }
          if (collected.first().content === 'PS4') { 
            message.channel.send('Took the PS4 role from ya');
            message.guild.member(message.author.id).removeRole(ps4Role.id)
        }
    })
        .catch(() => {
          message.channel.send('No roles were mentioned...');
        });
    });
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}