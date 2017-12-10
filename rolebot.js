const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "r!"
const config = require("./config.json")
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;

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
  clbot.configure({botapi: "CC5t7pEnGxIq-mjrBf89H2pDcWQ"});
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == "dm"){
    Cleverbot.prepare(() => {
      clbot.write(message.content, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
          message.channel.sendMessage(response.message).catch(console.error);
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
      });
    });
  }
  if(message.content.indexOf('r!') !== 0) return;

  const args = message.content.slice('r!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandssss/${command}`);
    commandFile.run(client, message, args);
  } catch (err) {
    client.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err}\`\`\``);
  }
});

client.login(process.env.BOT_TOKEN);
