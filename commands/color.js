exports.run = (client, message, args) => {
    var mentionedcolor = (message.content.replace("A!color ", ""))
             message.channel.sendEmbed({ color: mentionedcolor,
  description:  "Color: " + mentionedcolor})
}