exports.run = (client, message, args, usedPrefix) => {
        const canKick = message.guild.member(message.author.id).hasPermission('KICK_MEMBERS');
    
        if ((!canKick) && message.author.id !== '233366720062947330') {
            return message.channel.send('You need the permission `KICK_MEMBERS` to use this command.');
        }
let person = args[0]
let actionUsed = args[1]
let reason = message.content.replace(`a!modlog ${args[0]} ${args[1]} `,'')
if((!args[0]) || (person.length !== 18) || (!args[1]) || (!reason)) {
        message.channel.send("Proper usage:\n```a!modlog <Target's ID> <Action Used> <Reason>```")
return;
}
client.channels.get(message.guild.channels.find('name', 'modlogs').id).sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: `**Moderator:** ${message.author.tag}\n**Action used:** ${actionUsed}\n**Target:** ${person} (<@${person}>)\n**Reason:** ${reason}`
      })
}
