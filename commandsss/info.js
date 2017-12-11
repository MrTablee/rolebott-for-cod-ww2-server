exports.run = (client, message, args) => {
  message.channel.sendMessage("What command did you want more info on? ***Keep in mind, I'm only asking for the command name, for example: `help` would give you info on the command `..help`, Responding with `..help` won't give you info on it, but rather trigger the command.***")
  .then(() => {
    message.channel.awaitMessages(response => response.content === 'help' || response.content === 'kick' || response.content === 'mute' || response.content === 'ban' || response.content === 'prune' || response.content === 'ping' || response.content === 'info' || response.content === 'invite' || response.content === 'Randomcolor' || response.content === 'support' || response.content === 'urban' || response.content === 'whereami' || response.content === 'whoami' || response.content === 'youtube' || response.content === 'rate' || response.content === 'yt' || response.content === 'points' || response.content === 'level', {
      max: 1,
      maxMatches: 5,
      time: 30000,
      errors: ['time'],
    })
    .then((collected) => {
        if (collected.first().content === 'help') { 
          message.channel.send('```asciidoc\n= Help =\nUsage: Sends a list of commands that I will respond to.\n[Example: ..help]\nRequired Permissions: Send Messages, Read Messages```');
        }
        if (collected.first().content === 'ping') { 
          message.channel.send('```asciidoc\n= Ping =\nUsage: Sends the current amount of time it takes me to respond to commands.\n[Example: ..ping]\nRequired Permissions: Send Messages, Read Messages```');
        }
        if (collected.first().content === 'ban') { 
          message.channel.send('```asciidoc\n= Ban =\nUsage: Bans a member from the current server.\n[Example 1: ..ban @Mr.Table#1352]\n[Example 2: ..ban <@233366720062947330>]\nRequired Permissions: Send Messages, Read Messages, Ban Members```');
        }
        if (collected.first().content === 'info') { 
          message.channel.send('```asciidoc\n= Info =\nUsage: Sends info on commands that most users can use.\n[Example 1: User: "..info" Bot: "What command do you need info on?" User: "info"]\n[Example 2: User: "..info" Bot: "What command do you need info on?" User: "urban"]\nRequired Permissions: Send Messages, Read Messages```');
        }
        if (collected.first().content === 'invite') { 
          message.channel.send('```asciidoc\n= Invite =\nUsage: Gives links to invite me to your server, or for you to join mine\n[Example: ..invite]\nRequired Permissions: Send Messages, Send Embeds, Read Messages```');
      }
        if (collected.first().content === 'kick') { 
          message.channel.send('```asciidoc\n= Kick =\nUsage: Kicks a user from the current server.\n[Example 1: ..kick @Mr.Table#1352]\n[Example 2: ..kick <@233366720062947330>]\nRequired Permissions: Send Messages, Read Messages, Kick Members```');
      }
        if (collected.first().content === 'prune') { 
          message.channel.send('```asciidoc\n= Prune =\nUsage: Deletes any amount of messages in a channel, up to 50 at a time.\n[Example: ..prune 42]\nRequired Permissions: Send Messages, Read Messages, Manage Messages```');
      }
        if (collected.first().content === 'randomcolor') { 
          message.channel.send('```asciidoc\n= Random Color =\nUsage: Fetches a random color and sends you the code of the color.\n[Example: ..randomcolor]\nRequired Permissions: Send Messages, Read Messages, Send Embed```');
      }
        if (collected.first().content === 'rate') { 
          message.channel.send('```asciidoc\n= Rate =\nUsage: Rates any user, thing, place, etc... Rates something\n[Example 1: ..rate @Mr.Table#1352]\n[Example 2: ..rate Peaches]\nRequired Permissions: Send Messages, Read Messages```');
      }
        if (collected.first().content === 'support') { 
          message.channel.send('```asciidoc\n= Support =\nUsage: Shows the AlleyCat Team that you support us!\n[Example: ..support]\nRequired Permissions: Send Messages, Read Messages```');
      }
        if (collected.first().content === 'urban') { 
          message.channel.send('```asciidoc\n= Urban =\nUsage: Searches Urbandictionary.com for a random word or a selected word.\n[Example 1: ..urban 1000th base]\n[Example 2: ..urban]\nRequired Permissions: Send Messages, Read Messages, Send Embed```');
      }
        if (collected.first().content === 'whereami') { 
          message.channel.send('```asciidoc\n= Where Am I? =\nUsage: Shows information about the channel the command is used in.\n[Example: ..whereami]\nRequired Permissions: Send Messages, Read Messages, Send Embed```');
      }
        if (collected.first().content === 'whoami') { 
          message.channel.send('```asciidoc\n= Who Am I? =\nUsage: Shows information about the command user.\n[Example: ..whoami]\nRequired Permissions: Send Messages, Read Messages, Send Embed```');
      }
        if (collected.first().content === 'youtube') { 
          message.channel.send('```asciidoc\n= Youtube =\nUsage: Searches Youtube.com for a video.\n[Example: ..youtube PewDiePie]\nRequired Permissions: Send Messages, Read Messages, Send Embed```');
      }
        if (collected.first().content === 'yt') { 
          message.channel.send('```asciidoc\n= Youtube =\nUsage: Searches Youtube.com for a video.\n[Example: ..yt PewDiePie]\nRequired Permissions: Send Messages, Read Messages, Send Embed```');
        }
        if (collected.first().content === 'points') { 
          message.channel.send('```asciidoc\n= Points =\nUsage: Shows how many points you have.\n[Example: ..points]\nRequired Permissions: Send Messages, Read Messages```');
      }
        if (collected.first().content === 'level') { 
          message.channel.send('```asciidoc\n= Level =\nUsage: Shows what level you are.\n[Example: ..level]\nRequired Permissions: Send Messages, Read Messages```');
      }
  })
      .catch(() => {
        message.channel.send('No valid commands were mentioned in the 30 second window...');
      });
  });
}