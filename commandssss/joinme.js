exports.run = (client, message) => {
    client.joinVoiceChannel(message.member.voicechannelID).catch((err) => {
        message.channel.send('Error joining voice channel: ' + err.stack);
        console.log(err);
    });
};