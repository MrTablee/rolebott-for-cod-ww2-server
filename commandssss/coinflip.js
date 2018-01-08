exports.run = (client, message, args, database, usedPrefix) => {
    const mentionedID = message.author.id


    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        var countDownDate = points.coinflipCooldown
        
          var now = new Date().getTime();
        
          var distance = countDownDate - now;
        
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    var noww = new Date().getTime();
    
    if(countDownDate < noww){
    if(points.coinflipCooldown < noww){
        var amountBet = args[1]
        if(!args[1]){
            var amountBet = points.coins
            }
        if(amountBet < 1){
            message.channel.send(`You must bet at least 1 coin!`)
            return;
        }
        if(amountBet > points.coins){
            message.channel.send(`You must bet at most, ${points.coins} coins!`)
            return;
        }
        let answ = ["tails", "heads"]
        
        let flipResult = answ[Math.floor(Math.random() * answ.length)]

if(amountBet < 1){
    message.channel.send("Gotta bet something!")
    return;
}
points.coins = points.coins - amountBet
if((args[0].toLowerCase() !== 'heads') && (args[0].toLowerCase() !== 'tails')) {
    message.channel.send('You must bet heads or tails!')
    return;
}
if((args[0].toLowerCase() == 'heads') && (flipResult == 'heads')){
    message.channel.send(`Coin flip came back heads, you won ${amountBet * 2} XP and won back ${Math.floor(amountBet * 0.25)} Coins!`)
    points.coins = points.coins + (Math.floor(amountBet * 0.25))
    points.xp = points.xp + (amountBet * 2)
}
if((args[0].toLowerCase() == 'tails') && (flipResult == 'tails')){
    message.channel.send(`Coin flip came back tails, you won ${amountBet * 2} XP and won back ${Math.floor(amountBet * 0.25)} Coins!`)
    points.coins = points.coins + (Math.floor(amountBet * 0.25))
    points.xp = points.xp + (amountBet * 2)
}
if((args[0].toLowerCase() == 'heads') && (flipResult == 'tails')){
    message.channel.send(`Coin flip came back tails, you lost ${amountBet} Coins!`)
}
if((args[0].toLowerCase() == 'tails') && (flipResult == 'heads')){
    message.channel.send(`Coin flip came back heads, you lost ${amountBet} Coins!`)
}}else {
    message.channel.send(`Gotta wait ${seconds} more seconds`)
}}

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
}
