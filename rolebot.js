const Eris = require("eris");
const client = new Eris(TOKEN);
const fs = require("fs");
const prefix = "r!"

client.on("guildMemberAdd", (guild, member) => {
  let guestRole = guild.roles.find("Guest");
  const welcomeChannel = guild.channels.find(c=>c.name==='reception'); 
try {  guild.channels.find(c => c.name === 'reception').createMessage(

  `Welcome ${member.username} to ${guild.name}, use r!addrole to gain access to your platform's channels!`
).then(() => (client.addGuildMemberRole(guild.id, member.id, guestRole.id)))
    } catch (err) {
      client.channels.get('384821440844922882').createMessage(`ERROR WHEN EXECUTING COMMAND: \`\`\`${err}\`\`\``);
    }
});

client.on("ready", () => {
  client.editStatus(
      {
        name:
        `r!help | In ${client.guilds.size} servers`,
        type: 0
      }
  );
  console.log(`RoleBot is connected to the Discord WebSocket`)
});

var awaitMessages = {};

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return; // If DM
  
  if (awaitMessages[message.author.id].channel === message.channel.id) {
	  let guild = message.channel.guild;
  let guestRole = (guild.roles.find(r => r.name === "Guest"));    
  let pcRole = (guild.roles.find(r => r.name === "PC"));    
  let ps4Role = (guild.roles.find(r => r.name === "PS4"));    
  let xboxRole = (guild.roles.find(r => r.name === "Xbox"));    
	  if (message.content === 'PC') { 
          message.channel.createMessage('Took the PC role from ya');
		  if (awaitMessages[msg.author.id].role === "take")
          	client.removeGuildMemberRole(guild.id, message.author.id, pcRole.id)
		  else
			client.addGuildMemberRole(guild.id, message.author.id, pcRole.id)
      }
        if (message.content === 'Xbox') { 
          message.channel.createMessage('Took the Xbox role from ya');
          if (awaitMessages[msg.author.id].role === "take")
          	client.removeGuildMemberRole(guild.id, message.author.id, xboxRole.id)
		  else
			client.addGuildMemberRole(guild.id, message.author.id, xboxRole.id)
      }
        if (message.content === 'PS4') { 
          message.channel.createMessage('Took the PS4 role from ya');
          if (awaitMessages[msg.author.id].role === "take")
          	client.removeGuildMemberRole(guild.id, message.author.id, ps4Role.id)
		  else
			client.addGuildMemberRole(guild.id, message.author.id, ps4Role.id)
      }
	  
	  delete awaitMessages[message.author.id];
  } // if we are awaiting for messages in the channel
  
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

const botAdmin = "message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880'"
if(message.content === prefix+'reboot') {
             if  (message.author.id == '233366720062947330' || message.author.id == '215509157837537280') {
        message.channel.createMessage({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "Reboot in progress... Please allow RoleBot about 5-10 seconds before use again."}).then(process.exit);
              } else if (message.author.id != '233366720062947330') {
        message.channel.createMessage({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "This is above your pay grade. (Bot admins only)"})
}}
if(message.content === prefix+'ping') {
message.channel.createMessage("Pinging...").then(m => {
  m.edit(":ping_pong: Time taken: " + (m.timestamp - message.timestamp) + 'ms')});
}

if(message.content === prefix+'takerole'){
  message.channel.createMessage("What role did ya want taken?")
  .then(m => {awaitMessages[message.author.id] = {channel: message.channel.id, role: "take"};
  		setTimeout(()=>{
			message.channel.createMessage('No roles were mentioned...');
			delete awaitMessages[message.author.id]
		}, 30000)});
}

if((message.content.startsWith(prefix+'manual')) || message.content.startsWith(prefix+'m')) {
  let staffRole = (message.channel.guild.roles.find(r => r.name === "Staff"));
  if(message.member.roles.indexOf(staffRole.id) === -1) {
message.channel.createMessage('This command is for Staff only')
return;
} else if(message.member.roles.indexOf(staffRole.id) !== -1) {
if((args[0] === 'takerole') || (args[0] === 't')) {
  let mentionedMember = message.channel.guild.members.get(message.mentions[0].id);        let roleToRemove = (message.channel.guild.roles.find(c => c.name === args[2]));
  client.removeGuildMemberRole(guild.id, message.author.id, roleToRemove.id)
} else if((args[0] === 'addrole') || (args[0] === 'a')) {
  let mentionedMember = message.channel.guild.members.get(message.mentions[0].id);        let roleToRemove = (message.channel.guild.roles.find(c => c.name === args[2]));
  client.addGuildMemberRole(guild.id, message.author.id, roleToRemove.id)
}}}

if(message.content === prefix+'addrole') {

  
  message.channel.createMessage("What role did ya want?")
  .then(m => { awaitMessages[message.author.id] = {channel: message.channel.id, role: "get"};
  		setTimeout(()=>{
			message.channel.createMessage('No roles were mentioned...');
			delete awaitMessages[message.author.id]
		}, 30000)});
}

if(message.content.startsWith(prefix+'eval')){
  try {
    if (message.author.id !== '233366720062947330') return;
  let command = message.content.replace(prefix+"eval ", "");
  let output = eval(command);
  message.channel.createMessage("\n```\n" + output + "\n```");
  } catch (err) {
    message.channel.createMessage("`Uh oh... " + err + "` came up... Check your code and try again!")
  }}
});



client.connect();
