<<<<<<< HEAD
exports.run = (client, message, args) => {
    if (message.author.id !== '233366720062947330') return;
  let command = message.content.replace("A!eval", "");
  let output = eval(command);
  message.channel.send("\n```fix\n" + output + "\n```");
=======
exports.run = (client, message, args) => {
    if (message.author.id !== '233366720062947330') return;
  let command = message.content.replace("A!eval", "");
  let output = eval(command);
  message.channel.send("\n```fix\n" + output + "\n```");
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}