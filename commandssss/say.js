let botAdmin = "message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880'"
let patronMember = "message.author.id == '271443182066204673'"
let patronPlusMember = "message.author.id == '271443182066204673'"
let patronProMember = "message.author.id == '271443182066204673'"
exports.run = (client, message, args) => {
if (message.author.id == '233366720062947330') {
         message.delete()
         message.channel.send(message.content.replace("..say ", ""))
}    else if (!botAdmin && !patronPlusMember && !patronProMember)
{message.channel.send('This is above your pay grade.')}}