exports.run = (client, message, args) => {
 client.users.forEach(g => { message.author.send(g.name) })
}
