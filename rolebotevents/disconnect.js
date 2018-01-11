exports.run = (atlasclient) => {
atlasclient.user.setPresence({
    game: {
      name: 'Uh oh I\'m dying...',
      type: 0
    }
  })
  console.log(`Atlas is disconnected from the Discord WebSocket`)
  }
