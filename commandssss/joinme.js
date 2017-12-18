<<<<<<< HEAD
exports.run = (client, message, args) => {
    client.joinVoiceChannel(message.member.voiceState.channelID).catch((err) => {
    client.createMessage(message.channel.id, "Error joining voice channel: " + err.message);
    console.log(err);
})
=======
exports.run = (client, message, args) => {
    client.joinVoiceChannel(message.member.voiceState.channelID).catch((err) => {
    client.createMessage(message.channel.id, "Error joining voice channel: " + err.message);
    console.log(err);
})
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
}