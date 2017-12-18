exports.run = (client, message, args) => {
  try {
    if (message.author.id !== '233366720062947330') return;
  let command = message.content.replace("r!eval ", "");
  let output = eval(command);
  message.channel.send("\n```\n" + output + "\n```");
  } catch (err) {
    message.channel.send("`Uh oh... " + err + "` came up... Check your code and try again!")
  }}