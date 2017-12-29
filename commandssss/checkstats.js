exports.run = (client, message, args, database) => {
    if(message.mentions.users.size === 0){
        message.channel.send('You must mention a user...')
    }
    database.query('SELECT points FROM users WHERE userId = $1', [message.mentions.users.first().id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        let usrLevel = points.level
        let usrPoints = points.points
        let usrAwards = points.awards
        let usrPrefix = points.prefix
message.channel.send(`${message.mentions.users.first().username}'s stats are:\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}\nPrefix:${usrPrefix}`)
    });
}