const Discord = require("discord.js");
var discord = require('discord-bot-webhook');
const fs = require("fs");
const Eris = require("eris");
const sql = require("sqlite");
const music = require('discord.js-music-v11');
sql.open("./score.sqlite");
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;


discord.hookId = '385323385254707200';
discord.hookToken = 'GNUVn9Mz15Yd9T-kxrnfK18_MHtsFud-Q7xlopUGMFljBu7W07Jm-SjdNBnSF1tiDnhZ';
const alphaclient = new Discord.Client();
const alleyclient = new Discord.Client();
const rolebotv2client = new Discord.Client();
const rolebotclient = new Discord.Client();
var bot = new Eris.CommandClient(process.env.CHAIRTOKEN, {}, {
  description: "Some hoe ass bot made to smash your bitch",
  owner: "Mr.Table#1352​",
  prefix: ",,"
});

const rolebotv2prefix = "RoleBot ";
const alphaprefix = "A!";
const alleyprefix = "..";


alphaclient.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf('A!') !== 0) return;

  const args = message.content.slice('A!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}`);
    commandFile.run(alphaclient, message, args);
  } catch (err) {
    alphaclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err}\`\`\``);
  }
});

alphaclient.login(process.env.ALPHATOKEN);






bot.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(',,') !== 0) return;
});

bot.on("ready", () => {
  console.log("Mr. Chair is now online!");
  bot.editStatus({
    name: `,,help | In ${bot.guilds.size} servers!`
  })
});

bot.on("guildCreate", () => {
  console.log("New server added!");
  bot.editStatus({
    name: `,,help | In ${bot.guilds.size} servers!`
  })
});
var playCommand = ",,Join me";
bot.on("messageCreate", (msg) => {
  if(msg.content.startsWith(playCommand)) {
      if(!msg.channel.guild) {
          bot.createMessage(msg.channel.id, "This command can only be run in a server.");
          return;
      }
      if(!msg.member.voiceState.channelID) {
          bot.createMessage(msg.channel.id, "You are not in a voice channel.");
          return;
      }
      bot.joinVoiceChannel(msg.member.voiceState.channelID).catch((err) => {
          bot.createMessage(msg.channel.id, "Error joining voice channel: " + err.message);
          console.log(err);
      }).then((connection) => {
          });
  }
});

bot.on("guildDelete", () => {
  console.log("Left a server!");
  bot.editStatus({
    name: `,,help | In ${bot.guilds.size} servers!`
  })
});

bot.registerCommandAlias("halp", "help");

bot.registerCommand("ping", (msg) => {
  var pingArray = ["Yo yo yo!", "You probably expected a pong, huh?\n\n\n\n\n\n\n\nTOO BAD!", "[INSERT_PONG_HERE]", `${msg.author.username} has big gay`, 'Oof.', "AAAAAAAAAAAAAAAAAAHHHHH", '497309328947375289389 ms']
  var randomPingNumber = Math.floor(Math.random()*rebootArray.length);
  var chosenPingMessage = pingArray[randomPingNumber];
return chosenPingMessage}, {
  description: "Pong!",
  fullDescription: "This command could be used to check if the bot is up. Or entertainment when you're bored."
});

bot.registerCommand("eval", (msg) => {
  let evalCmd = msg.content.replace(",,eval ", "");
return eval(evalCmd)},{
  requirements:{ 
    userIDs: ['233366720062947330'] 
  }
})

bot.registerCommand("invite", "Oi m8 got a few invites for ye! Hit 😉 for an link to invite me, or 😏 to join my server.", {
  description: "Gives invite links.",
  fullDescription:"Gives you invite links for me and my server.",
  reactionButtons: [ 
    {
        emoji: "😉",
        type: "cancel",
        response: (msg) => { 
            return msg.content + " https://discordapp.com/oauth2/authorize?client_id=329824214561587201&scope=bot&permissions=406006847"
        }},
        {
          emoji: "😏",
          type: "cancel",
          response: (msg) => { 
              return msg.content + " https://discord.gg/hVvXQFD"
          }}
        ]
})
var rebootArray = ["Gimme a sec, changing my clothes :wink:", "Gimme a sec, changing gears :gear:", "Gimme a sec, changing out of my work uniform", "Gimme a sec, changing into my new dress", "Gimme a sec, changing owners", "Gimme a sec, changing my batteries", "Gimme a sec, solving world hunger", "Gimme a sec, becoming a vegan", "Gimme a sec, pinging <@215509157837537280>", "Gimme a sec, curing cancer", "Gimme a sec, my ultimate is charging", "Gimme a sec, rushing B", "Gimme a sec, breaking the law"]
var randomNumber = Math.floor(Math.random()*rebootArray.length);
var chosenRebootMessage = rebootArray[randomNumber];

bot.registerCommand("reboot", msg => {
  bot.createMessage(msg.channel.id, chosenRebootMessage)
  .then(() => process.exit());
});



bot.registerCommand("pong", ["Pang!", "Peng!", "Ping!", "Pung!"], {
  caseInsensitive: true,
  description: "Ping!",
  fullDescription: "This command could also be used to check if the bot is up. Or entertainment when you're bored.",
  reactionButtons: [
    {
        emoji: "⬅",
        type: "edit",
        response: (msg) => {
            return msg.content.split().reverse().join();
        }
    },
    {
        emoji: "🔁",
        type: "edit",
        response: ["Pang!", "Peng!", "Ping!", "Pong!", "Pung!"]
    },
    {
        emoji: "⏹",
        type: "cancel"
    }
],
reactionButtonTimeout: 60000
});

var echoCommand = bot.registerCommand("echo", (msg, args) => { 
  if(args.length === 0) { 
      return "Invalid input";
  }
  var text = args.join(" ");
  return text;
}, {
  description: "Make the bot say something",
  fullDescription: "The bot will echo whatever is after the command label.",
  usage: "<text>"
});

echoCommand.registerSubcommand("reverse", (msg, args) => {
  if(args.length === 0) {
      return "Invalid input";
  }
  var text = args.join(" ");
  text = text.split("").reverse().join("");
  return text;
}, {
  description: "Make the bot say something in reverse",
  fullDescription: "The bot will echo, in reverse, whatever is after the command label.",
  usage: "<text>"
});

echoCommand.registerSubcommandAlias("backwards", "reverse");


bot.connect();




rolebotclient.on("messageDelete", (message) => {
  try{
  rolebotclient.channels.get(message.guild.channels.find('name', 'logs').id).sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
            description: `**Message Author:** ${message.author.tag}\n**Message Content:** ${message.content}\n**Message Channel:** ${message.channel.name}`});
    } catch (err) {
      rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err}\`\`\``);
    }
});

rolebotclient.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  let guestRole = member.guild.roles.find("name", "Guest");
  const welcomeChannel = member.guild.channels.find("name", 'reception'); 
try {  member.guild.channels.find("name", 'reception').send(`Welcome ${member.user} to ${guild.name}, use r!addrole to gain access to your platform's channels!`).then(() => (member.addRole(guestRole.id)))
    } catch (err) {
      rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err}\`\`\``);
    }
});

rolebotclient.on("guildMemberRemove", (member) => {
  let guild = member.guild;
  const welcomeChannel = member.guild.channels.find("name", 'reception'); 
try {  member.guild.channels.find("name", 'reception').send(`There goes ${member.user}... Sorry to see ya go`)
     rolebotclient.channels.get(message.guild.channels.find('name', 'logs').id).sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
            description: `**${member.username} left the server!**`});
    } catch (err) {
      rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err}\`\`\``);
    }
});

rolebotclient.on("ready", (member) => {
  rolebotclient.user.setPresence(
    {
      game:
      {
        name:
        `r!help | In ${rolebotclient.guilds.size} servers`,
        type: 0
      }
    })
  console.log(`RoleBot is connected to the Discord WebSocket`)
  clbot.configure({botapi: "CC5t7pEnGxIq-mjrBf89H2pDcWQ"});
});

rolebotclient.on("message", message => {
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
  if((message.guild.id === '377259194211893248') && (message.content.includes('youtube.com/'))){
    message.delete()
  message.channel.send('Successful test mah dude')
  }
  if(message.content.indexOf('r!') !== 0) return;

  const args = message.content.slice('r!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandssss/${command}`);
    commandFile.run(rolebotclient, message, args);
  } catch (err) {
    rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err}\`\`\``);
  }
});

rolebotclient.login(process.env.ROLEBOTTOKEN);






rolebotv2client.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  let memberRole = member.guild.roles.find("name", "Members");
  let botRole = member.guild.roles.find("name", "Bot");  
  let guestRole = member.guild.roles.find("name", "Guest");  
  const defaultChannel = member.guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
  if((!member.bot)){
  defaultChannel.send(`Welcome ${member.user} to ${guild.name}`).then(member.addRole(guestRole.id)).catch(console.error);
  }
});

rolebotv2client.on("ready", (member) => {
  rolebotv2client.user.setPresence(
    {
      game:
      {
        name:
        `RoleBot help | In ${rolebotv2client.guilds.size} servers`,
        type: 0
      }
    })
  console.log(`RoleBot is connected to the Discord WebSocket`)
});

rolebotv2client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf('RoleBot ') !== 0) return;

  const args = message.content.slice('RoleBot '.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandsssss/${command}`);
    commandFile.run(rolebotv2client, message, args);
  } catch (err) {
    rolebotv2client.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err}\`\`\``);
  }
});

rolebotv2client.login(process.env.ROLEBOTV2TOKEN);

alleyclient.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf('..') !== 0) return;



  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.channel.send(`Ayeeee, you've leveled up to level **${curLevel}**! Ain't that dandy ${message.author.username}?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(alleyprefix)) return;

  if (message.content.startsWith(alleyprefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.channel.send("Welp... your current level is 0");
      message.channel.send(`Your current level is ${row.level}`);
    });
  } else if (message.content.startsWith(alleyprefix + "givepoints")) {
    sql.open("./score.sqlite"); 
    sql.get(`SELECT * FROM scores WHERE userId ="${message.mentions.users.first().id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
          } else {
    sql.run(`UPDATE scores SET points = ${row.points + 50} WHERE userId = ${message.mentions.users.first().id}`);
    message.channel.send(`Gave ${message.mentions.users.first().username} 50 points`)
 }})}

  if (message.content.startsWith(alleyprefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.channel.send("Sadly you do not have any points yet... Talk more");
      message.channel.send(`${message.author.username} you currently have ${row.points} points, good going!`);

    });
  }

  const args = message.content.slice('..'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandsss/${command}`);
    commandFile.run(alleyclient, message, args);
  } catch (err) {
    alleyclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err}\`\`\``);
  }
  
  
  
});

alleyclient.login(process.env.ALLEYTOKEN);
