exports.run = (client, message, args) => {
    message.channel.send('**DMing you a list of commands!**')
    message.author.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: "**Utility Commands:**\nHelp (Aliases: h)\nPatreon\n~~Balance~~\n~~Level~~\nInfo\nSuggest\nBug\nPing (Aliases: p)\nGoogle\n***Urban***\nYoutube (Aliases: YT)\nSP\nInvite\nServernumber (Aliases: SN)\nChannelnumber (Aliases: CN)\n**For fun:**\nRate\nLenny\nDab\nWhereami (Aliases: wai)\nSay\nLennyshrug (Aliases: ls)\nLennyflip (Aliases: lf)\nRandomword (Aliases: RW)\nTableflip (Aliases: flip, tf)\nShrug\n***Alpha***\nCoinflip (Aliases: cf)\nYesorno (Aliases: yorn, yn)\nEightball (Aliases: 8B, 8Ball)\n***Minigame commands:\nSlots***\n**Mod functions:** (Requires perms and role name `Mod`)\nKick\nBan\nMute (Requires the role `Muted` to be in the server with desired mute perms)\nPrune\n***NSFW Commands:\nReal\nVideo\nGif\nHentai***\n\n***Text like this means the command exists, but is currently down for reworking***\n\n~~Text like this means the command is not working, being removed, has been removed, or is about to be removed~~"
    });
}