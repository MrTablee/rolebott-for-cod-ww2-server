exports.run = (client, message, args, database, usedPrefix) => {
    
        const mentionedID = message.author.id
        
        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
   if(points.coins > (500 * points.rewardLevel)){
            points.rewardLevel++
            points.coins = points.coins - (500 * points.rewardLevel)
            message.channel.send(`*${message.author.username} upgraded their reward level to ${points.rewardLevel}!*`)            
} else {
message.channel.send(`You don't have enough coins..`)
}
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
