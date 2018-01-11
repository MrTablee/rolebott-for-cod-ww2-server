exports.run = (client, message, database, usedPrefix) => {
  try {
    if (message.author.id !== '233366720062947330') return;
    const command = message.content.replace(`a!eval `, '');
    const output = eval(command);
    message.channel.send('\n```\n' + output + '\n```');
  } catch (err) {
    message.channel.send('`Uh oh... ' + err + '` came up... Check your code and try again!');
  }
};
