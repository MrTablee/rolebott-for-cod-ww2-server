exports.run = (member) => {
let guild = member.guild;
  let guestRole = guild.roles.find('name', 'Guest');
  const welcomeChannel = member.guild.channels.find('name', 'reception');
  try {
    member.guild.channels.find('name', 'reception').send(`Welcome ${member.user} to ${guild.name}, use r!addrole to gain access to your platform's channels!`).then(() => (member.addRole(guestRole.id)))
  } catch (err) {
    rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err.stack}\`\`\``);
  }
}
