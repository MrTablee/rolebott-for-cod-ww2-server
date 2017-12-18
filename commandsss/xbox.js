<<<<<<< HEAD
exports.run = (client, message, args) => {
    let guild = message.member.guild;
    let xboxRole = (guild.roles.find("name", "Xbox"));
      message.guild.member(message.author.id).addRole(xboxRole.id).then(member => {
          message.channel.send(`Gave ${member.user.username} the \`Xbox\` role!`)
      })
=======
exports.run = (client, message, args) => {
    let guild = message.member.guild;
    let xboxRole = (guild.roles.find("name", "Xbox"));
      message.guild.member(message.author.id).addRole(xboxRole.id).then(member => {
          message.channel.send(`Gave ${member.user.username} the \`Xbox\` role!`)
      })
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
  }