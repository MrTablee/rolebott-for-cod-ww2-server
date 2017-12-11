exports.run = (client, message, args) => {
    let guild = message.member.guild;
    let pcRole = (guild.roles.find("name", "PC"));
      message.guild.member(message.author.id).addRole(pcRole.id).then(member => {
          message.channel.send(`Gave ${member.user.username} the \`PC\` role!`)
      })
  }