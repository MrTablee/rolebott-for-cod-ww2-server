exports.run = (client, newMsg, message) => {
    if (!newMsg) {
        message.channel.send('One second, rushing B...').then(m => {
            m.edit(':ping_pong: **Bot ping stats:** \n *Response time:* ' + (Date.now() - message.createdTimestamp) + 'ms \n*Heartbeat ping:* ' + Math.round(client.ping) + 'ms \n*Most recent heartbeat pings:* ' + client.pings);
        });
    } else {
        newMsg.channel.send(':ping_pong: **Bot ping stats:** \n *Response time:* ' + (Date.now() - newMsg.createdTimestamp) + 'ms \n*Heartbeat ping:* ' + Math.round(client.ping) + 'ms \n*Most recent heartbeat pings:* ' + client.pings);
    }
};