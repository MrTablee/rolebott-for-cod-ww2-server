exports.run = (client, message, args) => {
    message.channel.send('**DMing you a list of commands!**')
message.author.sendEmbed({ color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
description: "**Utility Commands:**\n\nInfo (WIP)\nXbox\nPC\nPS4\nInvite\nHelp\nPing\nSupport\n\n**Fun Commands**\n\nRandomcolor\nRate\nWhereami\nWhoami\nUrban\nYoutube (yt)\n\n**Profile Commands**\n\nPoints\nLevel\nReset (Bot owner only)\n\n**Moderator Commands** (These require the role named `Mod`)\n\nPrune\nKick\nBan\n\n**Admin Commands:**\n\nSay\nSP\nEval\nReboot" });
}