<<<<<<< HEAD
const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "setprefix ")) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {            
        sql.run(`UPDATE scores SET userPrefix = ${message.content.replace(prefix+"setprefix ", "")} WHERE userId = ${message.author.id}`);
        message.channel.send(`New prefix is ${message.content.replace(prefix+"setprefix ", "")}`)
      })}
=======
const prefix = ".."
const sql = require("sqlite");
sql.open("./score.sqlite");    
exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "setprefix ")) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {            
        sql.run(`UPDATE scores SET userPrefix = ${message.content.replace(prefix+"setprefix ", "")} WHERE userId = ${message.author.id}`);
        message.channel.send(`New prefix is ${message.content.replace(prefix+"setprefix ", "")}`)
      })}
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
    }