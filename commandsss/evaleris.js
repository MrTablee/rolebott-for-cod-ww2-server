exports.run = (client, message, args) => {
    const Discord = require("eris");
      let evalCmd = message.content.replace("..evaleris ", "");
    return eval(evalCmd)},{
      requirements:{ 
        userIDs: ['233366720062947330'] 
      }
  }
