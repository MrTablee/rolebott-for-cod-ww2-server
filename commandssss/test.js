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
        if(!points)
        {points = {
            points: 0,
            level: 777
        }}
    });
    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), message.author.id], (err, res) => {
        if (err) {console.log(err); return}
    });
}