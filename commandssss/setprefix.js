exports.run = (client, message, args, database, usedPrefix) => {
    const mentionedAmount = message.content.replace(`${usedPrefix}setprefix `, '')
    if(!args) {message.channel.send('You can\'t run this without any args')}

    database.query('SELECT points FROM users WHERE userId = $1', [message.author.id], (err, res) => {
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
            points: usrPoints,
            level: usrLevel,
            awards: usrAwards,
            prefix: mentionedAmount
        }

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), message.author.id], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Set your prefix to \`${mentionedAmount}\`!`)
}