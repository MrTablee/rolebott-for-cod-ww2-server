exports.run = (client, message) => {
  const colorchosen = (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1;
  message.channel.sendEmbed({
    color: colorchosen,
    description: (colorchosen)
  });
};