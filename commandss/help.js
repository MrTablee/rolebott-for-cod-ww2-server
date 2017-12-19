exports.run = (client, message, args) => {
    message.channel.send('**DMing you a list of commands!**')
    message.author.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: "**Utility Commands:**\nHelp (Aliases: h)\nPartners\nPartner\nPatreon\nInfo\nSuggest\nBug\nPing (Aliases: p)\nGoogle\nYoutube (Aliases: YT)\nSP\nInvite\nChannelnumber (Aliases: CN)\n**For fun:**\nRate\nLenny\nDab\nWhereami (Aliases: wai)\nSay\nLennyshrug (Aliases: ls)\nLennyflip (Aliases: lf)\nRandomword (Aliases: RW)\nTableflip (Aliases: flip, tf)\nShrug\nCoinflip (Aliases: cf)\nYesorno (Aliases: yorn, yn)\nEightball (Aliases: 8B, 8Ball)\n**Mod functions:** (Requires perms and role name `Mod`)\nKick\nBan\nMute (Requires the role `Muted` to be in the server with desired mute perms)\nPrune"
    });
}
