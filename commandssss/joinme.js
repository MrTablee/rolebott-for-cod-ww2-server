exports.run = (client, message, args) => {
    client.joinVoiceChannel(message.member.voiceState.channelID).catch((err) => {
    client.createMessage(message.channel.id, "Error joining voice channel: " + err.message);
    console.log(err);
})
}