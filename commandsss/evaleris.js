exports.run = (client, message, args) => {
    const Discord = require("eris");
    const bot = new Discord.Client();
    bot.registerCommand("eval", (msg) => {
      let evalCmd = msg.content.replace("..evaleris ", "");
    return eval(evalCmd)},{
      requirements:{ 
        userIDs: ['233366720062947330'] 
      }
    })
  }