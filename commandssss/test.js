exports.run = (client, message, args) => {
            database.query('SELECT * FROM points WHERE userId = $1', [message.author.id], (err, res) => {
              if (!res.rows[0]) return message.channel.send('Welp... your current level is 0');
              message.channel.send(`Your current level is ${res.rows[0].level}`);
            });
};