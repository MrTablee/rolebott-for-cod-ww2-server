<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description:  (message.content.replace("A!embed ", ""))})
=======
exports.run = (client, message, args) => {
    message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description:  (message.content.replace("A!embed ", ""))})
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}