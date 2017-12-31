exports.run = (client, message, args, database) => {
    if(message.mentions.users.size === 0){
        message.channel.send('You must mention a user...')
    }
    database.query('SELECT points FROM users WHERE userId = $1', [message.mentions.users.first().id], (err, res) => {
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
        let coinsNeeded = ((usrLevel * 10)**2)
        message.channel.send(`Your stats are:\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}\nZombies slain: ${usrKills}\nXP: ${usrXP}\n Coins: ${usrCoins}\n Cost to level up: ${coinsNeeded} Coins`)
    });
}