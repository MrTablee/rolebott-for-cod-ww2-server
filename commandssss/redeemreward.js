exports.run = (client, message, args, database, usedPrefix) => {
    
        const mentionedID = message.author.id

        
        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
        let rewardCoins = (Math.floor(Math.random() * ((10 * points.rewardLevel) - 1 + 1))) + 1;
        let rewardXP = (Math.floor(Math.random() * ((10 * points.rewardLevel) - 1 + 1))) + 1;
            if(points.rewardsAvailable > 0){
            points.rewardsAvailable--
            points.xp = points.xp + rewardXP
            points.coins = points.coins + rewardCoins
            message.channel.send(`*${message.author.username} collected their reward, which was worth ${rewardXP} XP, and ${rewardCoins} Coins!*`)            
            }
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }
