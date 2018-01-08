exports.run = (client, message, args, database, usedPrefix) => {
    
        const mentionedID = message.author.id

        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
 
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
            let rewardCoins = (Math.floor(Math.random() * (((points.level) * 10) - 1 + 1))) + 1;
            let rewardXP = (Math.floor(Math.random() * (((points.level) * 10) - 1 + 1))) + 1;    
    
            var countDownDate = points.dailyCooldown            
                    
                      var now = new Date().getTime();
                    
                      var distance = countDownDate - now;
                    
                      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                      var seconds = Math.floor((distance % (1000 * 60)) / 1000);    
            if(points.dailyCooldown < now){
            points.xp = points.xp + rewardXP
            points.coins = points.coins + rewardCoins
            points.dailyCooldown = new Date().getTime() + 86400000            
            message.channel.send(`*${message.author.username} collected their daily reward of ${rewardCoins} Coins and ${rewardXP} XP!*`)            
            } else {
                message.channel.send(`Gotta wait for another ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds before retrieving another daily!`)
            }
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }