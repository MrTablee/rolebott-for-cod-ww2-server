exports.run = (client, message, args) => {
    let answ = ["Yes", "No", "Maybe", "Focus and try again later", "Definitely", "Obviously not", "Mhm", "Lolno", "I mean... I guess, yeah"]
  
  message.channel.send(":8ball: " + answ[Math.floor(Math.random() * answ.length)] + " :8ball:")
            }
  