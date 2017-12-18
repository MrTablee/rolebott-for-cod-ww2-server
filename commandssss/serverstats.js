exports.run = (client, message, args) => { try{

    var wd = new Date(message.guild.createdTimestamp).toUTCString();
    if(!args[0]){
            let botCount = 0
client.guilds.get(message.guild.id).members.forEach(m => {
if(m.user.bot){botCount++}
})
      message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: `Server name: **${message.guild.name}**\nTotal amount of users in the server:**${message.guild.members.size}**\nActual Users: **${(message.guild.members.size)-botCount}**\nBot Users: **${botCount}**\nServer Created on: **${wd}**\nRoles: **${message.guild.roles.size}**\nChannels: **${message.guild.channels.size}**\nOwner: **${message.guild.owner}**\nOwner ID: **${message.guild.ownerID}**\nServer ID: **${message.guild.id}**`});
              }
    if(args[0] == 'Usercount') {
              message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: `Server Name: ${message.guild.name}\nUser Number: ${message.guild.members.size}` });
              }
              
              
} catch(err){message.channel.send(err)}}
            
