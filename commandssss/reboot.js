exports.run = (client, message, args) => {
      if (message.author.id == '233366720062947330') {
            message.channel.sendEmbed({
                  color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
                  description: "Reboot in progress... Please allow RoleBot about 5-10 seconds before use again."
            }).then(process.exit());
      } else if (message.author.id != '233366720062947330') {
            message.channel.sendEmbed({
                  color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
                  description: "This is above your pay grade. (Bot admins only)"
            })
      }
}
