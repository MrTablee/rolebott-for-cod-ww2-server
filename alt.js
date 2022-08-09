var Discord = require("discord.js");
var bot = new Discord.Client();
var S = require('string');

bot.on('message', message => {

  try {
    poke = require('./poke_IDs.json'); }
  catch(e) {
    poke = {};
  }

  if (message.author.id === '519850436899897346') {
    if(!(typeof message.embeds[0] == "undefined") ){
      if(message.embeds[0].title == "A wild Pokémon has Spawned, Say its name to catch it!"){
        var url = message.embeds[0].image.url;
        var id = S(url).between('http://64.52.84.23/Lychee/uploads/big/', '.png').s
        message.channel.send(poke[id].name)
      };
    };
  };

});



bot.on('ready', () => {

    console.log(`Ready to spam `);

});
bot.login("MjcxMzU1NjY2OTc3NzgzODA4.GFi6hz.LhGoIQWm0NRG5eMyioqgh_93tmwv4SHbIqrKUI");
