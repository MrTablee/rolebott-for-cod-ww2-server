exports.run = (client, message, args) => {
    var wd = new Date(message.guild.createdTimestamp).toUTCString();
    if(!args){
      message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: "Name: **"+message.channel.name+"**\nTopic: **"+message.channel.topic+"**\nType: **"+message.channel.type+"**\nPosition: **"+message.channel.position+"**\nId: **"+message.channel.id+"**\nCreated: **"+wd+"**" });
              } else if(args[0] == 'Usercount') {
              message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: `Server Name: ${message.guild.name}\nUser Number: ${message.guild.users.size}` });
              } else {
              message.channel.send('Insuffiecient Args')
              }
              }
              
}
            
