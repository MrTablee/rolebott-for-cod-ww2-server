exports.run = (client, message, args) => {
    var discord = require('discord-bot-webhook');
    discord.hookId = '385323385254707200';
    discord.hookToken = 'GNUVn9Mz15Yd9T-kxrnfK18_MHtsFud-Q7xlopUGMFljBu7W07Jm-SjdNBnSF1tiDnhZ';
    discord.userName = 'Cagney Carnation';
    discord.avatarUrl = 'SomeUrl';
    discord.sendMessage(message.content.replace('..hooksend ', ''))
  }