exports.run = (client, message, args, database, usedPrefix) => {
    if(args[1]){
    var amountWanted = args[1]
    } else {
    var amountWanted = 1
    }
    if(args[0]){
    var itemWanted = args[0]
    } else {
    message.channel.send('You need to choose an item!')
        return;
    }
        const mentionedID = message.author.id
if (itemWanted % 1 !== 0){
    return;
    message.channel.send('I need a number')
                         }
if (amountWanted % 1 !== 0){
    message.channel.send('I need a number')
    return;
}



        
        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
            if ((args[0] === '1') && (points.coins < (((points.xpBoostLevel * 10000) - 1) * amountWanted))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '2') && (points.coins < (((points.coinBoostLevel * 10000) - 1) * amountWanted))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '3') && ((points.coins < 500) * amountWanted)){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '4') && ((points.coins < 5000 * amountWanted))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '5') && ((points.coins < 500 * amountWanted))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '6') && ((points.coins < 50000))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '6') && (points.coins > (50000)) && (points.vipLevel < 2)){
            points.coins = points.coins - (50000)
            points.vipLevel++
            message.channel.send(`*${message.author.username} upgraded their VIP level to Level ${points.vipLevel}!*`)  
            }
            if ((args[0] === '5') && (points.coins > (500 * amountWanted))){
            points.coins = points.coins - (500 * amountWanted)
            points.rewardLevel = 0 - (0 - (points.rewardLevel)) - (0 - amountWanted)
            message.channel.send(`*${message.author.username} upgraded their reward to level ${points.rewardLevel}!*`)  
            }
            if ((args[0] === '4') && (points.coins > (5000 * amountWanted))){
            points.coins = points.coins - (5000 * amountWanted)
            points.xp = 0 - (0 - (points.xp)) - ((0 - 1000) * amountWanted)
            message.channel.send(`*${message.author.username} bought ${1000 * amountWanted} XP!*`)  
            }
            if ((args[0] === '3') && (points.coins > 500 * amountWanted)){
            points.coins = points.coins - (500 * amountWanted)
            points.xp = 0 - (0 - (points.xp)) - (0 - (100 * amountWanted))
            message.channel.send(`*${message.author.username} bought ${100 * amountWanted} XP!*`)  
            }
            if ((args[0] === '1') && (points.coins > ((points.xpBoostLevel * 10000) - 1))){
            points.coins = points.coins - ((points.xpBoostLevel * 10000) * amountWanted)
            points.xpBoostLevel = 0 - (0 - (points.xpBoostLevel)) - (0 - amountWanted)
            message.channel.send(`*${message.author.username} upgraded their xp boost level to level ${points.xpBoostLevel}*`)  
            }
            if ((args[0] === '2') && (points.coins > ((points.coinBoostLevel * 10000) - 1))){
            points.coins = points.coins - ((points.coinBoostLevel * 10000) * amountWanted)
            points.coinBoostLevel =  0 - (0 - (points.coinBoostLevel)) - (0 - amountWanted) 
            message.channel.send(`*${message.author.username} upgraded their coin boost level to level ${points.coinBoostLevel}*`)  
            }
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
