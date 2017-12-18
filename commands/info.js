exports.run = (client, message, args) => {
    let botVersion = "v0.9.9.9.9.9"
    message.channel.sendEmbed({
        color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
        description: "Language: JavaScript\nVersion: " + botVersion + "\nPlanned features:\n**A!urban\nA!real\nA!gif\nA!hentai\nA!video\nAlpha\nA!slots\nA!weather**"
    })
}