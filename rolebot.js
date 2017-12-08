const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const prefix = "r!"

client.on("guildMemberAdd", (member) => {
  let guild = member.guild;
  let guestRole = member.guild.roles.find("name", "Guest");
  const welcomeChannel = member.guild.channels.find("name", 'reception'); 
try {  member.guild.channels.find("name", 'reception').send(`Welcome ${member.user} to ${guild.name}, use r!addrole to gain access to your platform's channels!`).then(() => (member.addRole(guestRole.id)))
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
try {
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
    message.channel.send("One second, rushing B...").then(m => {
    m.edit(":ping_pong: **Bot ping stats:** \n *Response time:* " + (m.createdTimestamp - message.createdTimestamp) + 'ms \n*Heartbeat ping:* ' + Math.round(client.ping) + "ms \n*Most recent heartbeat pings:* " + client.pings)});
client.user.setPresence(
    {
      game:
      {
        name:
        `r!help | In ${client.guilds.size} servers | Most recent ping: ${client.ping}`,
        type: 0
      }
    })
}
  
  if(message.content === 'r!refreshping') {
    message.channel.send("Refreshing ping stats...")
client.user.setPresence(
    {
      game:
      {
        name:
        `r!help | In ${client.guilds.size} servers | Most recent ping: ${client.ping}`,
        type: 0
      }
    })
}

if(message.content === 'r!takerole'){
  let guild = message.guild
  let guestRole = (guild.roles.find("name", "Guest"));    
  let pcRole = (guild.roles.find("name", "PC"));    
  let ps4Role = (guild.roles.find("name", "PS4"));    
  let xboxRole = (guild.roles.find("name", "Xbox"));    
  
  message.channel.sendMessage("What role did ya want taken?  (This is case sensitive, so let me know \`Xbox, PS4, or PC\` And I'll give you that role)")
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

if((message.content.startsWith('r!manual')) || message.content.startsWith('r!m')) {
  let staffRole = (message.guild.roles.find("name", "Staff"));
  if(!message.member.roles.has(staffRole.id)) {
message.channel.send('This command is for Staff only')
return;
} else if(message.member.roles.has(staffRole.id)) {
if((args[0] === 'takerole') || (args[0] === 't')) {
  let mentionedMember = message.guild.member(message.mentions.users.first());        let roleToRemove = (message.guild.roles.find('name', args[2]));
  message.guild.member(mentionedMember.id).removeRole(roleToRemove.id)
} else if((args[0] === 'addrole') || (args[0] === 'a')) {
  let mentionedMember = message.guild.member(message.mentions.users.first());        let roleToRemove = (message.guild.roles.find('name', args[2]));
  message.guild.member(mentionedMember.id).addRole(roleToRemove.id)
}}}

if(message.content === 'r!addrole') {
  let guild = message.guild
  let guestRole = (guild.roles.find("name", "Guest"));    
  let pcRole = (guild.roles.find("name", "PC"));    
  let ps4Role = (guild.roles.find("name", "PS4"));    
  let xboxRole = (guild.roles.find("name", "Xbox"));    
  
  message.channel.sendMessage("What role did ya want?  (This is case sensitive, so let me know \`Xbox, PS4, or PC\` And I'll give you that role)")
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
          message.guild.member(message.author.id).addRole(pcRole.id)
      }
        if (collected.first().content === 'Xbox') { 
          message.channel.send('You now have access to the following Xbox channels:\n<#377263472091594752>\n<#377263507173015553>\n<#385164046892007426>\nAnd <#385553280241106955>!');
          message.guild.member(message.author.id).addRole(xboxRole.id)
      }
        if (collected.first().content === 'PS4') { 
          message.channel.send('You now have access to the following PS4 channels:\n<#377263304915156992>\n<#385164109861355521>\n<#385552955853504524>\nAnd <#377263347189678090>!');
          message.guild.member(message.author.id).addRole(ps4Role.id)
      }
  })
      .catch(() => {
        message.channel.send('No roles were mentioned...');
      });
  });
}
  if(message.content.startsWith('r!emit')){
    message.channel.send("Emitting `guildMemberAdd`").then(client.emit("guildMemberAdd", message.member))
}
  if(message.content === 'r!help') {
    message.channel.send('**DMing you a list of commands!**')
message.author.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description: "Commands:\n**r!ping:** Sends the current ping time of the bot.\n**r!help:** Sends this message to your DMs.\n**r!addrole:** Adds a role to you.\n**r!takerole:** Takes a role from you.\n**r!manual**(*Staff only*) Manually adds a role to a user." });
}

if(message.content.startsWith('r!eval')){
  try {
    if (message.author.id !== '233366720062947330') return;
  let command = message.content.replace("r!eval ", "");
  let output = eval(command);
  message.channel.send("\n```\n" + output + "\n```");
  } catch (err) {
    message.channel.send("`Uh oh... " + err + "` came up... Check your code and try again!")
  }}} catch(err){
    console.log(err)}
});


client.login(process.env.BOT_TOKEN);
