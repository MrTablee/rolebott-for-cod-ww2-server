exports.run = (client, message, args) => {
    var wd = new Date(message.channel.createdTimestamp).toUTCString();
    
      message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
      description: "Name: **"+message.channel.name+"**\nTopic: **"+message.channel.topic+"**\nType: **"+message.channel.type+"**\nPosition: **"+message.channel.position+"**\nId: **"+message.channel.id+"**\nCreated: **"+wd+"**" });
              }
            