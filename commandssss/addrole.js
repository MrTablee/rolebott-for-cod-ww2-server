exports.run = (client, message) => {
  const guild = message.guild;
  const guestRole = (guild.roles.find('name', 'Guest'));
  const pcRole = (guild.roles.find('name', 'PC'));
  const ps4Role = (guild.roles.find('name', 'PS4'));
  const xboxRole = (guild.roles.find('name', 'Xbox'));
  const saidRole = (guild.roles.find('name', (message.content.replace("r!addrole ", ""))));
if(message.guild.id === '377259194211893248') {
  message.channel.sendMessage('What role did ya want?  (This is case sensitive, so let me know `Xbox, PS4, or PC` And I\'ll give you that role)')
    .then(() => {
      message.channel.awaitMessages(response => ['Xbox', 'PC', 'PS4'].includes(response.content), {
          max: 1,
          maxMatches: 5,
          time: 30000,
          errors: ['time'],
        })
        .then((collected) => {
          if (collected.first().content === 'PC') {
            message.channel.send('You now have access to the following PC channels:\n<#377263671895785483>\n<#377263736479678465>\n<#385164138529292298>\nAnd <#385553319457849344>');
            message.guild.member(message.author.id).addRole(pcRole.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content === 'Xbox') {
            message.channel.send('You now have access to the following Xbox channels:\n<#377263472091594752>\n<#377263507173015553>\n<#385164046892007426>\nAnd <#385553280241106955>!');
            message.guild.member(message.author.id).addRole(xboxRole.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content === 'PS4') {
            message.channel.send('You now have access to the following PS4 channels:\n<#377263304915156992>\n<#385164109861355521>\n<#385552955853504524>\nAnd <#377263347189678090>!');
            message.guild.member(message.author.id).addRole(ps4Role.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
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
