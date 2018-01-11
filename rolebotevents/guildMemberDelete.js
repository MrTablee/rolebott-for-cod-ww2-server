exports.run = (atlasclient, member) => {
let guild = member.guild;
  const welcomeChannel = member.guild.channels.find('name', 'reception');
  if(!welcomeChannel) return
  try {
    member.guild.channels.find('name', 'reception').send(`There goes ${member.user}... Sorry to see ya go`)
    atlasclient.channels.get(message.guild.channels.find('name', 'logs').id).sendEmbed({
      color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
      description: `**${member.username} left the server!**`
    });
  } catch (err) {
    atlasclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err.stack}\`\`\``);
  }}
