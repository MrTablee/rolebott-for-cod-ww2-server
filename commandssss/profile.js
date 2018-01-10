exports.run = (client, message, args, database) => {
    const Discord = require('discord.js');
    if(message.mentions.users.size > 0){
        var mentionedID = message.mentions.users.first().id
    } else {
        var mentionedID = message.author.id        
    }
    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
                let coinsNeeded = (((points.level + 1) * 10)**2)
        const profileEmbed = new Discord.RichEmbed()
.setTitle(`<@${mentionedID}>'s profile`)
.addField(`VIP Level: `, `${points.vipLevel}`)
.addField(`Current Level: `, `${points.level}`)
.addField(`Current Points: `, `${points.points}`)
.addField(`Awards: `, `${points.awards}`)
.addField(`XP: `, `${points.xp}`)
.addField(`Coins: `, `${points.coins}`)
.addField(`XP needed to level up: `, `${coinsNeeded} XP`)
.setTimestamp()
.setAuthor(message.author.username)
.setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
        let usrKills = points.zombiesSlain
        let usrCoins = points.coins
        let usrXP = points.xp
        if(points.vipLevel = 1){
message.channel.send(`<@${mentionedID}>'s profile:\nVIP Level: ${points.vipLevel}\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}\nZombies slain: ${usrKills}\nXP: ${usrXP}\nCoins: ${usrCoins}\nXP needed to level up: ${coinsNeeded} XP`)
        } else if(points.vipLevel = 2){
message.channel.send(`\`\`\`<@${mentionedID}>'s profile:\nVIP Level: ${points.vipLevel}\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}\nZombies slain: ${usrKills}\nXP: ${usrXP}\nCoins: ${usrCoins}\nXP needed to level up: ${coinsNeeded} XP\`\`\``)
        } else if(points.vipLevel = 3){
message.channel.send(profileEmbed)
        }
    
    
    });
}
