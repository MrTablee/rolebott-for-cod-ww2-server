exports.run = (client, message, args) => {
  let answ = ["Tails", "Heads"]

message.channel.send("Would you look at that? It's " + answ[Math.floor(Math.random() * answ.length)])
}