exports.run = (atlasclient) => {
  atlasclient.user.setPresence({
    game: {
      name: `a!help | In ${atlasclient.guilds.size} servers!`,
      type: 0
    }
  })
  console.log(`Atlas is connected to the Discord WebSocket`)
}
