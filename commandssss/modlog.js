exports.run = (client, message, args, usedPrefix) => {
const argss = message.content.slice(usedPrefix.length).trim().split(/-+/g);
let person = args[0]
if(person.length !== 18) {message.channel.send("Proper usage:\n```r!modlog <Target's ID> -<Reason> <Action Used>```")}
let reason = argss[0]
let actionUsed = message.content.replace(`r!modlog ${args[0]} ${argss[0]} `,'')
client.channels.get(message.guild.channels.find('name', 'modlogs').id).sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: `**Moderator:** ${message.author.tag}\n**Action used:** ${actionUsed}\n**Target:** ${person} (<@${person}>)\n**Reason:** ${reason}`
      })
}
