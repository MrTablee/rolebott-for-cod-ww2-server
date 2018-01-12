exports.run = (client, message, args, database) => {
testdatabase.query(`SELECT * FROM testusers ORDER BY username`).then(rows => {
                message.channel.send(rows);
        })   
}
