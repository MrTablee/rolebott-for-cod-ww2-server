exports.run = (client, message, args) => {
    const pg = require('pg')
    const database = new pg.Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    database.connect();

    database.query('SELECT points FROM users WHERE userId = $1', [message.author.id], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        let usrPoints = points.points
        let usrLevel = points.level
message.channel.send(`Your stats are:\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}`)
    });
}