exports.run = (atlasclient, member) => {
let guild = member.guild;
  if(guild.id == '377259194211893248'){
  let guestRole = guild.roles.find('name', 'Guest');
  const welcomeChannel = member.guild.channels.find('name', 'reception');
  try {
    member.guild.channels.find('name', 'reception').send(`Welcome ${member.user} to ${guild.name}, use a!addrole to gain access to your platform's channels!`).then(() => (member.addRole(guestRole.id)))
  } catch (err) {
    atlasclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err.stack}\`\`\``);
  }} else if (guild.id !== '377259194211893248'){
  let memberRole = guild.roles.find('name', 'Member');
  const welcomeChannel = member.guild.channels.find('name', 'reception');
  try {
    member.guild.channels.find('name', 'general').send(`Welcome ${member.user} to ${guild.name}!`).then(() => (member.addRole(memberRole.id)))
  } catch (err) {
    atlasclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err.stack}\`\`\``);
  }}
    
}
