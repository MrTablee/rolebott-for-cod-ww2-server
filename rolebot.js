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
if(message.content === 'r!ping') {
message.channel.send("Pinging...").then(m => {
  m.edit(":ping_pong: Time taken: " + (m.createdTimestamp - message.createdTimestamp) + 'ms')});
}

if(message.content === 'r!takerole'){
  let guild = message.guild
  let guestRole = (guild.roles.find("name", "Guest"));    
  let pcRole = (guild.roles.find("name", "PC"));    
  let ps4Role = (guild.roles.find("name", "PS4"));    
  let xboxRole = (guild.roles.find("name", "Xbox"));    
  
  message.channel.sendMessage("What role did ya want taken?")
  .then(() => {
    message.channel.awaitMessages(response => response.content === 'PC' || response.content === 'Xbox' || response.content === 'PS4', {
      max: 1,
      maxMatches: 5,
      time: 30000,
      errors: ['time'],
    })
    .then((collected) => {
        if (collected.first().content === 'PC') { 
          message.channel.send('Took the PC role from ya');
          message.guild.member(message.author.id).removeRole(pcRole.id)
      }
        if (collected.first().content === 'Xbox') { 
          message.channel.send('Took the Xbox role from ya');
          message.guild.member(message.author.id).removeRole(xboxRole.id)
      }
        if (collected.first().content === 'PS4') { 
          message.channel.send('Took the PS4 role from ya');
          message.guild.member(message.author.id).removeRole(ps4Role.id)
      }
  })
      .catch(() => {
        message.channel.send('No roles were mentioned...');
      });
  });
}

});

client.login(process.env.BOT_TOKEN);
