exports.run = (client, message, args, database) => {
database.query(`SELECT * FROM users ORDER BY userId`).then(rows => {
                message.channel.send(rows[0] + "\n" + rows[1] + "\n" + rows.0 + "\n" + rows.1);
        })   
}
