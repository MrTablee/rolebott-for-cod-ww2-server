exports.run = (client, message, args) => {
    const Discord = require("eris");
    client.registerCommand("evaleris", (msg) => {
      let evalCmd = msg.content.replace("..evaleris ", "");
    return eval(evalCmd)},{
      requirements:{ 
        userIDs: ['233366720062947330'] 
      }
    })
  }
