exports.run = (client, message, args) => {
  if (message.author.id !== '233366720062947330') return;
let command = message.content.replace("..evaljs ", "");
let output = eval(command);
message.channel.send("\n```\n" + output + "\n```");
}
