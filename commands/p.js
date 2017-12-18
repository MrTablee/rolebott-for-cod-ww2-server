<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.channel.sendMessage("Pinging...").then(m => {
 m.edit(":ping_pong: Time taken: " + (m.createdTimestamp - message.createdTimestamp) + 'ms')
            });
=======
exports.run = (client, message, args) => {
    message.channel.sendMessage("Pinging...").then(m => {
 m.edit(":ping_pong: Time taken: " + (m.createdTimestamp - message.createdTimestamp) + 'ms')
            });
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
    }