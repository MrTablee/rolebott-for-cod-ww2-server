<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.delete();
    message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description:  (message.content.replace("a!embed ", ""))})
=======
exports.run = (client, message, args) => {
    message.delete();
    message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description:  (message.content.replace("a!embed ", ""))})
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}