exports.run = (client, message, args) => {
    let canDeleteMessages = message.guild.member(message.author.id).hasPermission('DELETE_MESSAGES');
    if((canDeleteMessages) || message.author.id == '233366720062947330' ) {
    const params = message.content.split(" ").slice(1);
        let messagecount = parseInt(params[0]);
      message.channel.fetchMessages({
          limit: 100
        })
        .then(messages => {
          let msg_array = messages.array();
          msg_array.length = messagecount + 1;
          msg_array.map(m => m.delete().catch(console.error));
        });
                   }
  else {
    message.channel.send('This is above your pay grade. You need to be able to `DELETE_MESSAGES` to use this.')
    }
  }
