exports.run = (client, message, args) => {
    try{
    const Discord = require("eris");
      let evalCmd = message.content.replace("..evaleris ", "");
    return eval(evalCmd)},{
      requirements:{ 
        userIDs: ['233366720062947330'] 
      }}} catch(err) return (err)}
