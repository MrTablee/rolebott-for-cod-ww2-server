exports.run = (client, message, args) => {
    try {
        message.channel.send(`Emitting: \`${args[0]}\` with parameters: \`message.member\``).then(client.emit(args[0], message.member));
    } catch (err) {
        message.channel.send(err);
    }
};