<<<<<<< HEAD
exports.run = (client, message, args) => {

    const params = message.content.split(" ").slice(1);
        let messagecount = parseInt(params[0]);
                   if  ((message.member.roles.exists("name", "Mod")) || (message.author.id === '233366720062947330')) {
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
    message.channel.send('This is above your pay grade. You need to be a `Mod` to use this.')
    }
=======
exports.run = (client, message, args) => {

    const params = message.content.split(" ").slice(1);
        let messagecount = parseInt(params[0]);
                   if  ((message.member.roles.exists("name", "Mod")) || (message.author.id === '233366720062947330')) {
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
    message.channel.send('This is above your pay grade. You need to be a `Mod` to use this.')
    }
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
  }