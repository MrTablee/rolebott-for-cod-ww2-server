const moment = require('moment');
require('moment-duration-format');
const Discord = require('discord.js');
 
exports.run = (client, msg) => {
    const embed = new Discord.RichEmbed()
        .setTitle('Uptime')
        .setDescription(moment.duration(client.uptime).format(' D [days], H [hours], m [minutes], s [seconds]'))
        .setThumbnail(client.user.avatarURL)
        .setTimestamp();
        msg.channel.send({
        embed
    });
};
