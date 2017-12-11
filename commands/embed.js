exports.run = (client, message, args) => {
    message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description:  (message.content.replace("A!embed ", ""))})
}