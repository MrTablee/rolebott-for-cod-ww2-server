const botAdmin = 'message.author.id == \'233366720062947330\' || message.author.id == \'209765088196821012\' || message.author.id == \'277608955855896576\' || message.author.id == \'246766026052730880\'';
const patronMember = 'message.author.id == \'271443182066204673\'';
const patronPlusMember = 'message.author.id == \'271443182066204673\'';
const patronProMember = 'message.author.id == \'271443182066204673\'';
exports.run = (client, message, usedPrefix) => {
    if (message.author.id == '233366720062947330') {
        message.delete();
        message.channel.send(message.content.replace(usedPrefix + 'say ', ''));
    } else if (!botAdmin && !patronPlusMember && !patronProMember) {
        message.channel.send('This is above your pay grade.');
    }
};