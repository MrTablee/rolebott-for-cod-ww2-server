const Eris = require("eris");
const client = new Eris(process.env.BOT_TOKEN);
const fs = require("fs");
const prefix = "r!";

process.on('uncaughtException', (err)=>{
	client.createMessage("384821440844922882", `Unhandled error : ${err}`);
});

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

var awaitmsgs = {};

client.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (!msg.channel.guild) return; // If DM
  
  if (awaitmsgs[msg.author.id]) {
  	if (awaitmsgs[msg.author.id].channel === msg.channel.id){
	  let guild = msg.channel.guild;
  let guestRole = (guild.roles.find(r => r.name === "Guest"));    
  let pcRole = (guild.roles.find(r => r.name === "PC"));    
  let ps4Role = (guild.roles.find(r => r.name === "PS4"));    
  let xboxRole = (guild.roles.find(r => r.name === "Xbox"));    
	  if (msg.content === 'PC') { 
          msg.channel.createMessage('Took the PC role from ya');
		  if (awaitmsgs[msg.author.id].role === "take")
          	client.removeGuildMemberRole(guild.id, msg.author.id, pcRole.id)
		  else
			client.addGuildMemberRole(guild.id, msg.author.id, pcRole.id)
      }
        if (msg.content === 'Xbox') { 
          msg.channel.createMessage('Took the Xbox role from ya');
          if (awaitmsgs[msg.author.id].role === "take")
          	client.removeGuildMemberRole(guild.id, msg.author.id, xboxRole.id)
		  else
			client.addGuildMemberRole(guild.id, msg.author.id, xboxRole.id)
      }
        if (msg.content === 'PS4') { 
          msg.channel.createMessage('Took the PS4 role from ya');
          if (awaitmsgs[msg.author.id].role === "take")
          	client.removeGuildMemberRole(guild.id, msg.author.id, ps4Role.id)
		  else
			client.addGuildMemberRole(guild.id, msg.author.id, ps4Role.id)
      }
	  
	  delete awaitmsgs[msg.author.id];
	  }
  } // if we are awaiting for msgs in the channel
  
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

const botAdmin = "msg.author.id == '233366720062947330' || msg.author.id == '209765088196821012' || msg.author.id == '277608955855896576' || msg.author.id == '246766026052730880'"
if(msg.content === prefix+'reboot') {
             if  (msg.author.id == '233366720062947330' || msg.author.id == '215509157837537280') {
        msg.channel.createMessage({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "Reboot in progress... Please allow RoleBot about 5-10 seconds before use again."}).then(process.exit);
              } else if (msg.author.id != '233366720062947330') {
        msg.channel.createMessage({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "This is above your pay grade. (Bot admins only)"})
}}
if(msg.content === prefix+'ping') {
msg.channel.createMessage("Pinging...").then(m => {
  m.edit(":ping_pong: Time taken: " + (m.timestamp - msg.timestamp) + 'ms')});
}

if(msg.content === prefix+'takerole'){
  msg.channel.createMessage("What role did ya want taken?")
  .then(m => {awaitmsgs[msg.author.id] = {channel: msg.channel.id, role: "take"};
  		setTimeout(()=>{
			msg.channel.createMessage('No roles were mentioned...');
			delete awaitmsgs[msg.author.id]
		}, 30000)});
}

if((msg.content.startsWith(prefix+'manual')) || msg.content.startsWith(prefix+'m')) {
  let staffRole = (msg.channel.guild.roles.find(r => r.name === "Staff"));
  if(msg.member.roles.indexOf(staffRole.id) === -1) {
msg.channel.createMessage('This command is for Staff only')
return;
} else if(msg.member.roles.indexOf(staffRole.id) !== -1) {
if((args[0] === 'takerole') || (args[0] === 't')) {
  let mentionedMember = msg.channel.guild.members.get(msg.mentions[0].id);        let roleToRemove = (msg.channel.guild.roles.find(c => c.name === args[2]));
  client.removeGuildMemberRole(guild.id, msg.author.id, roleToRemove.id)
} else if((args[0] === 'addrole') || (args[0] === 'a')) {
  let mentionedMember = msg.channel.guild.members.get(msg.mentions[0].id);        let roleToRemove = (msg.channel.guild.roles.find(c => c.name === args[2]));
  client.addGuildMemberRole(guild.id, msg.author.id, roleToRemove.id)
}}}

if(msg.content === prefix+'addrole') {
  let guild = msg.channel.guild;
  let guestRole = (guild.roles.find(r => r.name === "Guest"));    
  let pcRole = (guild.roles.find(r => r.name === "PC"));    
  let ps4Role = (guild.roles.find(r => r.name === "PS4"));    
  let xboxRole = (guild.roles.find(r => r.name === "Xbox"));    
  
  msg.channel.createMessage("What role did ya want?")
  .then(m => { awaitmsgs[msg.author.id] = {channel: msg.channel.id, role: "get"};
  		setTimeout(()=>{
			msg.channel.createMessage('No roles were mentioned...');
			delete awaitmsgs[msg.author.id]
		}, 30000)});
}

if(msg.content.startsWith(prefix+'eval')){
  try {
    if (msg.author.id !== '233366720062947330') return;
  let command = msg.content.replace(prefix+"eval ", "");
  let output = eval(command);
  msg.channel.createMessage("\n```\n" + output + "\n```");
  } catch (err) {
    msg.channel.createMessage("`Uh oh... " + err + "` came up... Check your code and try again!")
  }}
});



client.connect();
