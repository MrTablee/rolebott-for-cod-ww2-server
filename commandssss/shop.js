exports.run = (client, message, args, database) => {
    database.query('SELECT points FROM users WHERE userId = $1', [message.author.id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
        let usrKills = points.zombiesSlain
        let usrCoins = points.coins
        let usrXP = points.xp
        let coinsNeeded = (((usrLevel + 1) * 10)**2)
message.channel.send(`**Shop Items:**\nID:1 XP boost level up \`Cost: ${points.xpBoostLevel * 10000}\`\nID:2 Coin boost level up \`Cost: ${points.coinBoostLevel * 10000}\`\nID:3 100 XP \`Cost: 500\`\nID:4 1000 XP \`Cost: 5000\`\nID:5 Reward level up \`Cost: 500\`\n\n**To buy an item, use r!buy <ID> <AMOUNT>**`)
    });
}
