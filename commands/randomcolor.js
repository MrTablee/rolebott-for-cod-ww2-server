<<<<<<< HEAD
exports.run = (client, message, args) => {
    var colorchosen = (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1
             message.channel.sendEmbed({ color: colorchosen,
  description:  (colorchosen)})
=======
exports.run = (client, message, args) => {
    var colorchosen = (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1
             message.channel.sendEmbed({ color: colorchosen,
  description:  (colorchosen)})
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}