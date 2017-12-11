exports.run = (client, message, args) => {
  const Discord = require("discord.js");
  const client = new Discord.Client();
  if (message.author.id !== '233366720062947330') return;
let command = message.content.replace("..evaljs ", "");
let output = eval(command);
message.channel.send("\n```\n" + output + "\n```");
}