exports.run = (client, message, args, database, usedPrefix) => {
    
        const mentionedID = message.author.id
if (args[0] % 1 !== 0){message.channel.send('I need a number')}


        
        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
            if ((args[0] === '1') && (points.coins < ((points.xpBoostLevel * 10000) - 1))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '2') && (points.coins < ((points.coinBoostLevel * 10000) - 1))){
            message.channel.send(`*${message.author.username}, you don't have enough coins*`)
            return;
            }
            if ((args[0] === '1') && (points.coins > ((points.xpBoostLevel * 10000) - 1))){
            points.coins = points.coins - (points.xpBoostLevel * 10000)
            points.xpBoostLevel++
            message.channel.send(`*${message.author.username} upgraded their xp boost level to level ${points.xpBoostLevel}*`)  
            }
            if ((args[0] === '2') && (points.coins > ((points.coinBoostLevel * 10000) - 1))){
            points.coins = points.coins - (points.coinBoostLevel * 10000)
            points.coinBoostLevel++
            message.channel.send(`*${message.author.username} upgraded their coin boost level to level ${points.coinBoostLevel}*`)  
            }
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
