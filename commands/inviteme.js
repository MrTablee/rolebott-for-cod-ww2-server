exports.run = (client, message, args) => {
  message.channel.sendEmbed({
    color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
    description: "Need me for mod functions? (Kick and ban) Use this! [Mod invite](https://discordapp.com/oauth2/authorize?client_id=296758764802015242&scope=bot&permissions=406006847) \n\nIf not, just head over here! (Delete messages) [Lesser Mod Invite](https://discordapp.com/oauth2/authorize?client_id=296758764802015242&scope=bot&permissions=76806) \n\nDon't need Mod functions at all? Invite me with this! [No Perms](https://discordapp.com/oauth2/authorize?client_id=296758764802015242&scope=bot) \n\nJoin my home server here! [Home Server](https://discord.gg/vpxZc23) \n\n***NOTE:*** I HAVE AN AUTOROLE FUCTION THAT REQUIRES MANAGE ROLE PERMS THAT WILL AUTOROLE THE ROLE `Members` TO PEOPLE WHO JOIN"
  });
}