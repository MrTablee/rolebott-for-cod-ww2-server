<<<<<<< HEAD
exports.run = (client, message, args) => {
    message.channel.send("I rate " + (message.content.replace("..rate ", "") + ":\n" + ((Math.floor(Math.random() * (100 - 1 + 1))) + 1 )+ "/100"))
    
=======
exports.run = (client, message, args) => {
    message.channel.send("I rate " + (message.content.replace("..rate ", "") + ":\n" + ((Math.floor(Math.random() * (100 - 1 + 1))) + 1 )+ "/100"))
    
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
    }