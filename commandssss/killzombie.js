exports.run = (client, message, args, database, usedPrefix) => {
    
        const mentionedID = message.author.id
        let rewardCoins = (Math.floor(Math.random() * (10 - 1 + 1))) + 1;
        let rewardXP = (Math.floor(Math.random() * (10 - 1 + 1))) + 1;
        
        database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if(!points){message.channel.send('This user currently has no database stats')}
            else points = JSON.parse(res.rows[0].points);
    
            var countDownDate = points.zombieCooldown
            var x = setInterval(function() {
                
                  var now = new Date().getTime();
                
                  var distance = countDownDate - now;
                
                  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                }, 1000);
            var noww = new Date().getTime();
            
            if(countDownDate < noww){
            console.log('After checking: ' + points);
            if(points.zombieCooldown < noww){
            points.zombiesSlain++
            points.xp = points.xp + rewardXP
            points.coins = points.coins + rewardCoins
            points.zombieCooldown = new Date().getTime() + 5000
            message.channel.send(`*${message.author.username} killed a zombie and gathered ${rewardCoins} Coins and ${rewardXP} XP!*`)            
            }
        } else {
            message.channel.send(`Gotta wait ${seconds} more seconds`)
        }
        database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
            if (err) {console.log(err); return}
        });
    });
    }