exports.run = (client) => {
  client.user.setPresence({
    game: {
      name: `r!help | In ${client.guilds.size} servers!`,
      type: 0
    }
  })
  console.log(`RoleBot is connected to the Discord WebSocket`)
}
