exports.run = (client, message, args) => { try{
    var wd = new Date(message.guild.createdTimestamp).toUTCString();
    if(!args[0]){
      message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: `Server name: **${message.guild.name}**\nUsers in the server:**${message.guild.members.size}**\nServer Created on: **${wd}**\nRoles: **${message.guild.roles.size}**\nChannels: **${message.guild.channels.size}**\nOwner: **${message.guild.owner.name}**\nServer ID: **${message.guild.id}**`});
              }
    if(args[0] == 'Usercount') {
              message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: `Server Name: ${message.guild.name}\nUser Number: ${message.guild.members.size}` });
              } else {
              message.channel.send('Insufficient Args')
              }
              
              
} catch(err){message.channel.send(err)}}
            
