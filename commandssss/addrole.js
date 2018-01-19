exports.run = (client, message) => {
  const guild = message.guild;
  const guestRole = (guild.roles.find('name', 'Guest'));
  const pcRole = (guild.roles.find('name', 'PC'));
  const ps4Role = (guild.roles.find('name', 'PS4'));
  const xboxRole = (guild.roles.find('name', 'Xbox'));
  const saidRole = (guild.roles.find('name', (message.content.replace("r!addrole ", ""))));
  const roless = message.guild.roles.map(g => g.name)
if(message.guild.id === '377259194211893248') {
  message.channel.sendMessage('What role did ya want?  (Xbox, PS4, PC, NA_Fortnite, EU_Fortnite, AU_Fortnite, NZ_Fortnite, NA_COD, EU_COD, AU_COD, NZ_COD, NA_PUBG, EU_PUBG, AU_PUBG, NZ_PUBG)')
    .then(() => {
      message.channel.awaitMessages(response => [roless].includes(response.content), {
          max: 1,
          maxMatches: 5,
          time: 30000,
          errors: ['time'],
        })
        .then((collected) => {
          var roleWanted = collected.first().content
          var rrole = (guild.roles.find('name', roleWanted));
            message.channel.send(`Gave you the ${roleWanted} role!`);
            message.guild.member(message.author.id).addRole(rrole.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          
        })
        .catch(() => {
          message.channel.send('No roles were mentioned...');
        });
    });
} else if (message.guild.id !== '377259194211893248') {
if (!args[0]) {message.channel.send('Please mention what role you wanted')
              }
  if (!saidRole){message.channel.send(`The role: **${saidRole}** doesn't seem to be around. Check to make sure you used the right capitals!`)
                } else if (saidRole) {
                message.channel.send(`Giving *${message.author.tag}* the role **${saidRole}**!`)
                }

}
};
