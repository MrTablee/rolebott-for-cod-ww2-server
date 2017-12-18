exports.run = (client, message, args) => {
  message.channel.sendEmbed({
    color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
    description: "I can see " + (client.channels.size) + " channels!"
  })
}