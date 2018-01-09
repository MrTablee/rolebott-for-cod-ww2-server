exports.run = (client, message, args, database, usedPrefix) => {
    if(message.author.id !== '233366720062947330' ) return
    const mentionedID = args[0]
    const mentionedAmount = message.content.replace(`${usedPrefix}overwrtieprefix ${args[0]}`, '')
    if(!args) {message.channel.send('You can\'t run this without any args')}

    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
points.prefix = mentionedAmount

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Overwrote ${mentionedID}'s prefix to \`${mentionedAmount}\`!`)
}
