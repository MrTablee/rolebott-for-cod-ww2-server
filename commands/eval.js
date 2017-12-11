exports.run = (client, message, args) => {
    if (message.author.id !== '233366720062947330') return;
  let command = message.content.replace("A!eval", "");
  let output = eval(command);
  message.channel.send("\n```fix\n" + output + "\n```");
}