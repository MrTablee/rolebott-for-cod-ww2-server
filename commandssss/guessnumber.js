exports.run = (client, message, args, database, usedPrefix) => {
    const mentionedID = message.author.id


    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);

var maxNumberPicked = args[1]
if(!maxNumberPicked){
var maxNumberPicked = 10
}
var chosenNumber = args[2]

        var amountBet = args[0]
        if(!args[0]){
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
        
    let pickedNumber = (Math.floor(Math.random() * (maxNumberPicked - 1 + 1))) + 1;
    if(!chosenNumber) {message.channel.send('Gotta guess a number!')}
if(amountBet < 1){
    message.channel.send("Gotta bet something!")
    return;
}
points.coins = points.coins - amountBet
if((args[1] < 1) || (args[1] > maxNumberPicked)) {
    message.channel.send(`You must pick a number between 1 and ${maxNumberPicked}!`)
    return;
}
if(pickedNumber === args[2]){
    message.channel.send(`The number was indeed ${pickedNumber}, you won ${amountBet * maxNumberPicked} XP and won back ${Math.floor(amountBet * 0.25)} Coins!`)
    points.coins = points.coins - (0 -(Math.floor(amountBet * maxNumberPicked)))
    points.xp = points.xp + (maxNumberPicked)
} else if(pickedNumber !== args[2]){
    message.channel.send(`Number was actually ${pickedNumber}, not ${chosenNumber}... you lost ${amountBet} Coins!`)
}

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
}
