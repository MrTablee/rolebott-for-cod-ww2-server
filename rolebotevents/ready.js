exports.run = (rolebotclient) => {
rolebotclient.on('ready', (member) => {
  rolebotclient.user.setPresence({
    game: {
      name: `r!help | In ${rolebotclient.guilds.size} servers!`,
      type: 0
    }
  })
  console.log(`RoleBot is connected to the Discord WebSocket`)
});}
