const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "takepoints ") && message.author.id === "233366720062947330") {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
            if (!row) {
              sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
              sql.run(`UPDATE scores SET points = ${row.points - 50}, level = ${row.level} WHERE userId = ${message.author.id}`);
              message.channel.send(`Test`);
            } else {              
                sql.run(`UPDATE scores SET points = ${row.points - 50}, level = ${row.level} WHERE userId = ${message.author.id}`);
                message.channel.send(`Test`);
              }
          })
    }}