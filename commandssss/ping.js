exports.run = (client, message, args) => {
    message.channel.send("One second, rushing B...").then(m => {
    m.edit(":ping_pong: **Bot ping stats:** \n *Response time:* " + (m.createdTimestamp - message.createdTimestamp) + 'ms \n*Heartbeat ping:* ' + Math.round(client.ping) + "ms \n*Most recent heartbeat pings:* " + client.pings)});
}

