<<<<<<< HEAD
exports.run = (client, message, args) => {
    var mentionedcolor = (message.content.replace("A!color ", ""))
             message.channel.sendEmbed({ color: mentionedcolor,
  description:  "Color: " + mentionedcolor})
=======
exports.run = (client, message, args) => {
    var mentionedcolor = (message.content.replace("A!color ", ""))
             message.channel.sendEmbed({ color: mentionedcolor,
  description:  "Color: " + mentionedcolor})
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}