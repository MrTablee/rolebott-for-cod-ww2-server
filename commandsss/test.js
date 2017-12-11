exports.run = (client, message, args) => {
    
        const params = message.content.split(" ").slice(1);
        message.channel.send(params[1], [0], [1])
                       }
      