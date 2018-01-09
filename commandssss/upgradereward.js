exports.run = (client, message, args, database, usedPrefix) => {
    if(!args[0]){
    var upgradeAmount = 1
    } else {
    var upgradeAmount = args[0]
    }
    if(upgradeAmount % 1 !== 0){
    message.channel.send('You need to mention a number')
        return;
    }
    
        const mentionedID = message.author.id
        
        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
   if(points.coins > ((500 * points.rewardLevel) * upgradeAmount)){
            points.rewardLevel = 0 + (0 - (points.rewardLevel + upgradeAmount))
            points.coins = points.coins - ((500 * points.rewardLevel) * upgradeAmount)
            message.channel.send(`*${message.author.username} upgraded their reward level to ${points.rewardLevel}!*`)            
} else {
message.channel.send(`You don't have enough coins..`)
}
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
