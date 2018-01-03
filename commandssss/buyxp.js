exports.run = (client, message, args, database, usedPrefix) => {
    const mentionedID = message.author.id
    let wantedAmount = args[0]
    
    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
        if(wantedAmount < points.coins/5){
        points.coins = points.coins - wantedAmount*5
        points.xp = points.xp - (0 - wantedAmount)
        }
        else {message.channel.send('Something went wrong, please try again or contact the owner.')}
    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`*${message.author.username} bought ${wantedAmount} XP for ${wantedAmount*5} coins!*`)
}