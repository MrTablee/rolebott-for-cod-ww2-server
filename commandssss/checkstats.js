exports.run = (client, message, args) => {
    if(message.mentions.users.size === 0){
        message.channel.send('You must mention a user...')
    }
    const pg = require('pg')
    const database = new pg.Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    database.connect();

    database.query('SELECT points FROM users WHERE userId = $1', [message.mentions.users.first().id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        let usrPoints = points.points
        let usrLevel = points.level
        let usrAwards = points.awards
message.channel.send(`${message.mentions.first().username}'s stats are:\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}\nAwards:${usrAwards}`)
    });
}