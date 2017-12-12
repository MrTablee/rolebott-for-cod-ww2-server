exports.run = (client, message, args) => {
    message.channel.send("I rate " + (message.content.replace("..rate ", "") + ":\n" + ((Math.floor(Math.random() * (100 - 1 + 1))) + 1 )+ "/100"))
    
    }