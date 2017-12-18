<<<<<<< HEAD
const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "blaze") && message.author.id === "233366720062947330") {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.users.first().username}"`).then(row => {            
        sql.run(`UPDATE scores SET points = 419, level = 420 WHERE userId = ${message.mentions.users.first().id}`);
        message.channel.send(`Stay groovy, smoke a doobie, ${message.mentions.users.first().username}\nCheck your points ;)`)
      })}
=======
const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "blaze") && message.author.id === "233366720062947330") {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.users.first().username}"`).then(row => {            
        sql.run(`UPDATE scores SET points = 419, level = 420 WHERE userId = ${message.mentions.users.first().id}`);
        message.channel.send(`Stay groovy, smoke a doobie, ${message.mentions.users.first().username}\nCheck your points ;)`)
      })}
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
    }