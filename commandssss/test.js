exports.run = (client, message, args) => {
    const pg = require('pg');
    const database = new pg.Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    database.connect();
            database.query('SELECT * FROM points WHERE userId = $1', [message.author.id], (err, res) => {
              if (!res.rows[0]) return message.channel.send('Welp... your current level is 0');
              message.channel.send(`Your current level is ${res.rows[0].level}`);
            });
};