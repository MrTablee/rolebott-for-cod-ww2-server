exports.run = (rolebotclient) => {
rolebotclient.user.setPresence({
    game: {
      name: 'Uh oh I\'m dying...',
      type: 0
    }
  })
  console.log(`RoleBot is disconnected from the Discord WebSocket`)
  }
