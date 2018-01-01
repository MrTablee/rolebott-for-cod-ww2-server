exports.run = (client, message, args, database, usedPrefix) => {

    const mentionedID = message.author.id
    
    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);

        let amountBet = points.points

        let answ = ["tails", "heads"]
        
        let flipResult = answ[Math.floor(Math.random() * answ.length)]

if(!args[0]){
        message.channel.send("You can't bet something other than heads or tails... Try again with heads or tails after allin")
        return;
    }
if(amountBet < 1){
    message.channel.send("Can't go all in!")
    return;
}

points.coins = 0
if((args[0].toLowerCase() !== 'heads') && (args[0].toLowerCase() !== 'tails')) {
    message.channel.send('You must bet heads or tails!')
    return;
}
if((args[0].toLowerCase() == 'heads') && (flipResult == 'heads')){
    message.channel.send(`All in coin flip came back heads, you won ${amountBet * 2} XP and won back ${Math.floor(amountBet * 0.25)} Coins!`)
    points.coins = points.coins + (Math.floor(amountBet * 0.25))
    points.xp = points.xp + (amountBet * 2)
}
if((args[0].toLowerCase() == 'tails') && (flipResult == 'tails')){
    message.channel.send(`All in coin flip came back tails, you won ${amountBet * 2} XP and won back ${Math.floor(amountBet * 0.25)} Coins!`)
    points.coins = points.coins + (Math.floor(amountBet * 0.25))
    points.xp = points.xp + (amountBet * 2)
}
if((args[0].toLowerCase() == 'heads') && (flipResult == 'tails')){
    message.channel.send(`All in coin flip came back tails, you lost ${amountBet} Coins!`)
}
if((args[0].toLowerCase() == 'tails') && (flipResult == 'heads')){
    message.channel.send(`All in coin flip came back heads, you lost ${amountBet} Coins!`)
}

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
}
