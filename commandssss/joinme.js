exports.run = (client, message, args) => {
    client.joinVoiceChannel(message.member.voiceState.channelID).catch((err) => {
        message.channel.send("Error joining voice channel: " + err.stack);
        console.log(err);
    })
}
