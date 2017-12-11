const botAdmin = "message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880'"
exports.run = (client, message, args) => {
             if  (message.author.id == '233366720062947330' || message.author.id == '215509157837537280') {
        message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "Reboot in progress... Please allow AlleyCat about 5-10 seconds before use again."}).then(client.user.setGame('Back in a sec 👋')).then(process.exit);
              } else if (message.author.id != '233366720062947330') {
        message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
        description: "This is above your pay grade. (Bot admins only)"})
}}