exports.run = (client, message, args, database) => {
    if(message.author.id !== '233366720062947330' ) {
        message.channel.send(`You don't have proper permissions to run this command!`)
        return
    }
    const mentionedID = args[0]
    const mentionedAmount = args[1]
    if(!args) {message.channel.send('You can\'t run this without any args')}

    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
        let usrKills = points.zombiesSlain
        let usrCoins = points.coins
        let usrXP = points.xp
        let coinsNeeded = (((usrLevel + 1) * 10)**2)
        points = {
            points: 0,
            level: 1,
            awards: "None",
            prefix: "r!",
            xp: 0,
            coins: 0,
            dailyCooldown: new Date().getTime(),
            zombieCooldown: new Date().getTime(),
            coinflipCooldown: new Date().getTime(),
            guessnumberCooldown: new Date().getTime(),
            rewardsAvailable: 0,
            rewardLevel: 1,
            xpBoostLevel: 1,
            coinBoostLevel: 1,
            vipLevel: 1
        };

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Reset: ${mentionedID}!`)
}
