exports.run = (client, message, args) => { try{
    var wd = new Date(message.guild.createdTimestamp).toUTCString();
    if(!args[0]){
      message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: "Guild Name: **"+message.guild.name+"**\nChannel Topic: **"+message.channel.topic+"**\nMessage Type: **"+message.channel.type+"**\nPosition: **"+message.channel.position+"**\nId: **"+message.channel.id+"**\nCreated: **"+wd+"**" });
              }
    if(args[0] == 'Usercount') {
              message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: `Server Name: ${message.guild.name}\nUser Number: ${message.guild.members.size}` });
              } else {
              message.channel.send('Insuffiecient Args')
              }
              
              
} catch(err){message.channel.send(err)}}
            
