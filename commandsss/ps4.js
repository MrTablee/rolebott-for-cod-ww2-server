<<<<<<< HEAD
exports.run = (client, message, args) => {
    let guild = message.member.guild;
    let ps4Role = (guild.roles.find("name", "PS4"));
      message.guild.member(message.author.id).addRole(ps4Role.id).then(member => {
          message.channel.send(`Gave ${member.user.username} the \`PS4\` role!`)
      })
=======
exports.run = (client, message, args) => {
    let guild = message.member.guild;
    let ps4Role = (guild.roles.find("name", "PS4"));
      message.guild.member(message.author.id).addRole(ps4Role.id).then(member => {
          message.channel.send(`Gave ${member.user.username} the \`PS4\` role!`)
      })
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
  }