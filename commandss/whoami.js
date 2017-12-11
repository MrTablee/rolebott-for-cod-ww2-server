exports.run = (client, message, args) => {
    message.channel.sendEmbed({ color: 1638144,
description: 'You are: ' +message.author.username+ '\nYour id is: ' +message.author.id+ '\nYour Discriminator is: ' +message.author.discriminator+ '\nYour account was made on: ' +message.author.createdAt+ '\nBot: ' +message.author.bot+ '\nAvatar ID: ' +message.author.avatar+ '\nAvatar URL: ' +message.author.avatarURL+ '\nYou are currently: ' +message.author.presence.status});
}