const ud = require('urban-dictionary')
exports.run = (client, message, args) => {
    
if(message.content === "..urban") {
ud.random(function (error, entry) {
  if (error) {
    message.channel.send(error.message)
  } else {
    message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description:  ("**Word:**\n" + entry.word + "\n**Definition:**\n" + entry.definition + "\n**Example:**\n" + entry.example)})
  }})} else if (message.content.startsWith("..urban ")) {    
   var definition = message.content.replace("..urban ", "")
    
   ud.term(definition, function (error, entries, tags, sounds) {
     if (error) {
        message.channel.send(error.message)
     } else {
        message.channel.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
            description:  ("**Word:**\n" + entries[0].word + "\n**Definition:**\n" + entries[0].definition + "\n**Example:**\n" + entries[0].example)})
     }
   })
  }

};