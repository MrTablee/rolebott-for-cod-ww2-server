exports.run = (client, message, args, database, usedPrefix) => {
    const mentionedID = message.author.id
    let rewardCoins = (Math.floor(Math.random() * (10 - 1 + 1))) + 1;
    let rewardXP = (Math.floor(Math.random() * (10 - 1 + 1))) + 1;
    
    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
        points.zombiesSlain++
        points.xp = points.xp + rewardXP
        points.coins = points.coins + rewardCoins
    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`*${message.author.username} killed a zombie and gathered ${rewardCoins} Coins and ${rewardXP} XP!*`)
}
