exports.run = (client, message) => {
  const guild = message.guild;
  const guestRole = (guild.roles.find('name', 'Guest'));
  const pcRole = (guild.roles.find('name', 'PC'));
  const ps4Role = (guild.roles.find('name', 'PS4'));
  const xboxRole = (guild.roles.find('name', 'Xbox'));
  const napubg = (guild.roles.find('name', 'NA_PUBG'));
  const nacod = (guild.roles.find('name', 'NA_COD'));
  const nafortnite = (guild.roles.find('name', 'NA_Fortnite'));
  const eupubg = (guild.roles.find('name', 'EU_PUBG'));
  const eucod = (guild.roles.find('name', 'EU_COD'));
  const eufortnite = (guild.roles.find('name', 'EU_Fortnite'));
  const aupubg = (guild.roles.find('name', 'AU_PUBG'));
  const aucod = (guild.roles.find('name', 'AU_COD'));
  const aufortnite = (guild.roles.find('name', 'AU_Fortnite'));
  const nzpubg = (guild.roles.find('name', 'NZ_PUBG'));
  const nzcod = (guild.roles.find('name', 'NZ_COD'));
  const nzfortnite = (guild.roles.find('name', 'NZ_Fortnite'));
  const saidRole = (guild.roles.find('name', (message.content.replace("r!addrole ", ""))));
if(message.guild.id === '377259194211893248') {
  message.channel.sendMessage('What role did ya want?  (Xbox, PS4, PC, NA_Fortnite, EU_Fortnite, AU_Fortnite, NZ_Fortnite, NA_COD, EU_COD, AU_COD, NZ_COD, NA_PUBG, EU_PUBG, AU_PUBG, NZ_PUBG)')
    .then(() => {
      message.channel.awaitMessages(response => ['xbox', 'ps4', 'pc', 'na_fortnite', 'eu_fortnite', 'au_fortnite', 'nz_fortnite', 'na_cod', 'eu_cod', 'au_cod', 'nz_cod', 'na_pubg', 'eu_pubg', 'au_pubg', 'nz_pubg'].includes(response.content.toLowerCase()), {
          max: 1,
          maxMatches: 5,
          time: 30000,
          errors: ['time'],
        })
        .then((collected) => {
          if (collected.first().content.toLowerCase() === 'pc') {
            message.channel.send('You now have access to the following PC channels:\n<#377263671895785483>\n<#377263736479678465>\n<#385164138529292298>\nAnd <#385553319457849344>');
            message.guild.member(message.author.id).addRole(pcRole.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'xbox') {
            message.channel.send('You now have access to the following Xbox channels:\n<#377263472091594752>\n<#377263507173015553>\n<#385164046892007426>\nAnd <#385553280241106955>!');
            message.guild.member(message.author.id).addRole(xboxRole.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'ps4') {
            message.channel.send('You now have access to the following PS4 channels:\n<#377263304915156992>\n<#385164109861355521>\n<#385552955853504524>\nAnd <#377263347189678090>!');
            message.guild.member(message.author.id).addRole(ps4Role.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'na_pubg') {
            message.channel.send('You now have access to the following channel:\n<#403963543109632010>!');
            message.guild.member(message.author.id).addRole(napubg.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'na_cod') {
            message.channel.send('You now have access to the following channel:\n<#403963631944990720>!');
            message.guild.member(message.author.id).addRole(nacod.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'na_fortnite') {
            message.channel.send('You now have access to the following channel:\n<#403963463954726913>!');
            message.guild.member(message.author.id).addRole(nafortnite.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'eu_pubg') {
            message.channel.send('You now have access to the following channel:\n<#403963543109632010>!');
            message.guild.member(message.author.id).addRole(eupubg.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'eu_cod') {
            message.channel.send('You now have access to the following channel:\n<#403963631944990720>!');
            message.guild.member(message.author.id).addRole(eucod.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'eu_fortnite') {
            message.channel.send('You now have access to the following channel:\n<#403963463954726913>!');
            message.guild.member(message.author.id).addRole(eufortnite.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'au_pubg') {
            message.channel.send('You now have access to the following channel:\n<#403963543109632010>!');
            message.guild.member(message.author.id).addRole(aupubg.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'au_cod') {
            message.channel.send('You now have access to the following channel:\n<#403963631944990720>!');
            message.guild.member(message.author.id).addRole(aucod.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'au_fortnite') {
            message.channel.send('You now have access to the following channel:\n<#403963463954726913>!');
            message.guild.member(message.author.id).addRole(aufortnite.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'nz_pubg') {
            message.channel.send('You now have access to the following channel:\n<#403963543109632010>!');
            message.guild.member(message.author.id).addRole(nzpubg.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'nz_cod') {
            message.channel.send('You now have access to the following channel:\n<#403963631944990720>!');
            message.guild.member(message.author.id).addRole(nzcod.id);
            message.guild.member(message.author.id).removeRole(guestRole.id);
          }
          if (collected.first().content.toLowerCase() === 'nz_fortnite') {
            message.channel.send('You now have access to the following channel:\n<#403963463954726913>!');
            message.guild.member(message.author.id).addRole(nzfortnite.id);
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
