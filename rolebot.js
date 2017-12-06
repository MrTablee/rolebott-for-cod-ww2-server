const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "r!"

client.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  let guestRole = member.guild.roles.find("name", "Guest");
  const welcomeChannel = member.guild.channels.find("name", 'reception'); 
try {  member.guild.channels.find("name", 'reception').send(

  `Welcome ${member.user} to ${guild.name}, use r!addrole to gain access to your platform's channels!`
).then(() => (member.addRole(guestRole.id)))
    } catch (err) {
      client.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err}\`\`\``);
    }
});

client.on("ready", (member) => {
  client.user.setPresence(
    {
      game:
      {
        name:
        `r!help | In ${client.guilds.size} servers`,
        type: 0
      }
    })
  console.log(`RoleBot is connected to the Discord WebSocket`)
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf('r!') !== 0) return;

  const args = message.content.slice('r!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

const botAdmin = "message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880'"
if(message.content === 'r!reboot') {
             if  (message.author.id == '233366720062947330' || message.author.id == '215509157837537280') {
        message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "Reboot in progress... Please allow RoleBot about 5-10 seconds before use again."}).then(process.exit);
              } else if (message.author.id != '233366720062947330') {
        message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "This is above your pay grade. (Bot admins only)"})
}}
});

client.login(process.env.BOT_TOKEN);
