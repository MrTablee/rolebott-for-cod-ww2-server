exports.run = (client, message, args, database, usedPrefix) => {
    if(message.author.id !== '233366720062947330' ) return
    const mentionedID = args[0]
    const mentionedAmount = message.content.replace(`${usedPrefix}firstaward ${args[0]}`, '')
    if(!args) {message.channel.send('You can\'t run this without any args')}

    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
        let usrLevel = points.level
        let usrPoints = points.points
        let usrAwards = points.awards
        let usrPrefix = points.prefix
        points = {
            points: usrPoints,
            level: usrLevel,
            awards: mentionedAmount,
            prefix: usrPrefix
        }

    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
message.channel.send(`Gave ${mentionedID} their first award! \`${mentionedAmount}\``)
}