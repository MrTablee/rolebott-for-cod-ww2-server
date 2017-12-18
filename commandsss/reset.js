<<<<<<< HEAD
const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "reset") && message.author.id === "233366720062947330") {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.users.first().id}"`).then(row => {            
        sql.run(`UPDATE scores SET points = 0, level = 0 WHERE userId = ${message.mentions.users.first().id}`);
        message.channel.send(`Reset ${message.mentions.users.first().username}`)
      })}
=======
const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "reset") && message.author.id === "233366720062947330") {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.users.first().id}"`).then(row => {            
        sql.run(`UPDATE scores SET points = 0, level = 0 WHERE userId = ${message.mentions.users.first().id}`);
        message.channel.send(`Reset ${message.mentions.users.first().username}`)
      })}
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
    }