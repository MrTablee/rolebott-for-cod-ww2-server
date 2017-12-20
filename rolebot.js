const Discord = require('discord.js');
var discord = require('discord-bot-webhook');
const fs = require('fs');
const Eris = require('eris');
const sql = require('sqlite');
const music = require('discord.js-music-v11');
sql.open('./score.sqlite');
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;


discord.hookId = '385323385254707200';
discord.hookToken = 'GNUVn9Mz15Yd9T-kxrnfK18_MHtsFud-Q7xlopUGMFljBu7W07Jm-SjdNBnSF1tiDnhZ';
const alphaclient = new Discord.Client();
const alleyclient = new Discord.Client();
const rolebotclient = new Discord.Client();
var bot = new Eris.CommandClient(process.env.CHAIRTOKEN, {}, {
  description: 'Some hoe ass bot made to smash your bitch',
  owner: 'Mr.Table#1352​',
  prefix: ',,'
});
const alphaprefix = 'A!';
const alleyprefix = '..';
const prefix = 'r!';

alphaclient.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf('A!') !== 0) return;

  const args = message.content.slice('A!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}`);
    commandFile.run(alphaclient, message, args);
  } catch (err) {
    alphaclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
  }
});

alphaclient.login(process.env.ALPHATOKEN);






bot.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf(',,') !== 0) return;
});

bot.on('ready', () => {
  console.log('Mr. Chair is now online!');
  bot.editStatus({
    name: `,,help | In ${bot.guilds.size} servers!`
  })
});

bot.on('guildCreate', () => {
  console.log('New server added!');
  bot.editStatus({
    name: `,,help | In ${bot.guilds.size} servers!`
  })
});
var playCommand = ',,Join me';
bot.on('messageCreate', (msg) => {
  if (msg.content.startsWith(playCommand)) {

    if (!msg.channel.guild) {
      bot.createMessage(msg.channel.id, 'This command can only be run in a server.');
      return;
    }

    if (!msg.member.voiceState.channelID) {
      bot.createMessage(msg.channel.id, 'You are not in a voice channel.');
      return;
    }

    bot.joinVoiceChannel(msg.member.voiceState.channelID).then((connection) => {

    }).catch(err => {
      bot.createMessage(msg.channel.id, 'ERROR joining voice channel: ' + err.stack);
      console.log(err.stack);
    })
  }
});

bot.on('guildDelete', () => {
  console.log('Left a server!');
  bot.editStatus({
    name: `,,help | In ${bot.guilds.size} servers!`
  })
});

bot.registerCommandAlias('halp', 'help');

bot.registerCommand('ping', (msg) => {
  var pingArray = ['Yo yo yo!', 'You probably expected a pong, huh?\n\n\n\n\n\n\n\nTOO BAD!', '[INSERT_PONG_HERE]', `${msg.author.username} has big gay`, 'Oof.', 'AAAAAAAAAAAAAAAAAAHHHHH', '497309328947375289389 ms']
  var randomPingNumber = Math.floor(Math.random() * rebootArray.length);
  var chosenPingMessage = pingArray[randomPingNumber];
  return chosenPingMessage
}, {
  description: 'Pong!',
  fullDescription: 'This command could be used to check if the bot is up. Or entertainment when you\'re bored.'
});

bot.registerCommand('eval', (msg) => {
  let evalCmd = msg.content.replace(',,eval', '')
  return eval(evalCmd)
}, {
  requirements: {
    userIDs: ['233366720062947330']
  }
})

bot.registerCommand('invite', 'Oi m8 got a few invites for ye! Hit 😉 for an link to invite me, or 😏 to join my server.', {
  description: 'Gives invite links.',
  fullDescription: 'Gives you invite links for me and my server.',
  reactionButtons: [{
      emoji: '😉',
      type: 'cancel',
      response: (msg) => {
        return msg.content + ' https://discordapp.com/oauth2/authorize?client_id=329824214561587201&scope=bot&permissions=406006847'
      }
    },
    {
      emoji: '😏',
      type: 'cancel',
      response: (msg) => {
        return msg.content + ' https://discord.gg/hVvXQFD'
      }
    }
  ]
});
const rebootArray = ['Gimme a sec, changing my clothes :wink:', 'Gimme a sec, changing gears :gear:', 'Gimme a sec, changing out of my work uniform', 'Gimme a sec, changing into my new dress', 'Gimme a sec, changing owners', 'Gimme a sec, changing my batteries', 'Gimme a sec, solving world hunger', 'Gimme a sec, becoming a vegan', 'Gimme a sec, pinging <@215509157837537280>', 'Gimme a sec, curing cancer', 'Gimme a sec, my ultimate is charging', 'Gimme a sec, rushing B', 'Gimme a sec, breaking the law']
const randomNumber = Math.floor(Math.random() * rebootArray.length);
const chosenRebootMessage = rebootArray[randomNumber];

bot.registerCommand('reboot', msg => {
  bot.createMessage(msg.channel.id, chosenRebootMessage)
    .then(() => process.exit());
});

bot.registerCommand('pong', ['Pang!', 'Peng!', 'Ping!', 'Pung!'], {
  caseInsensitive: true,
  description: 'Ping!',
  fullDescription: 'This command could also be used to check if the bot is up. Or entertainment when you\'re bored.',
  reactionButtons: [{
      emoji: '⬅',
      type: 'edit',
      response: (msg) => {
        return msg.content.split().reverse().join();
      }
    },
    {
      emoji: '🔁',
      type: 'edit',
      response: ['Pang!', 'Peng!', 'Ping!', 'Pong!', 'Pung!']
    },
    {
      emoji: '⏹',
      type: 'cancel'
    }
  ],
  reactionButtonTimeout: 60000
});

const echoCommand = bot.registerCommand('echo', (msg, args) => {
  if (args.length === 0) {
    return 'Invalid input';
  }
  const text = args.join(' ');
  return text;
}, {
  description: 'Make the bot say something',
  fullDescription: 'The bot will echo whatever is after the command label.',
  usage: '<text>'
});

echoCommand.registerSubcommand('reverse', (msg, args) => {
  if (args.length === 0) {
    return 'Invalid input';
  }
  let text = args.join(' ');
  text = text.split(').reverse().join(');
  return text;
}, {
  description: 'Make the bot say something in reverse',
  fullDescription: 'The bot will echo, in reverse, whatever is after the command label.',
  usage: '<text>'
});

echoCommand.registerSubcommandAlias('backwards', 'reverse');


bot.connect();


fs.readdir("./rolebotevents/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./rolebotevents/${file}`);
    let eventName = file.split(".")[0];
    rolebotclient.on(eventName, (...args) => eventFunction.run(rolebotclient, ...args));
  });
});

rolebotclient.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') {
      clbot.configure({
    botapi: 'CC5t7pEnGxIq-mjrBf89H2pDcWQ'
  });
    Cleverbot.prepare(() => {
      clbot.write(message.content, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
          message.channel.sendMessage(response.message).catch(console.error);
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
      });
    });
  }
  let points = JSON.parse(fs.readFileSync("./commandssss/points.json", "utf8"));
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    userData.level = curLevel;
    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
  }
  if (message.content.startsWith(prefix + "test")) {
for(i=0;i<666;i++){
  userData.points++;
  userData.level++;
}
  }
  if (message.content.startsWith(prefix + "level")) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  fs.writeFile("./commandssss/points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
  if ((message.guild.id === '377259194211893248') && (message.content.includes('youtube.com/')) && (!message.guild.member(message.author.id).roles.exists('name', 'Content Creators'))) {
    let muteRole = (message.guild.roles.find('name', 'Muted'));
    message.delete()
    message.channel.send(`So uhm... You can't do that... Unless you're a content creator... So I'm gonna go ahead and mute you... ${message.author.tag}`)
    message.guild.member(message.author.id).addRole(muteRole.id)
    message.author.send(`Hey there, sorry if I muted you wrongfully, but you need the role \`Content Creators\` to send youtube links in ${message.guild.name}`)
  }
  if (message.content.indexOf('r!') !== 0) return;

  const args = message.content.slice('r!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandssss/${command}`);
    commandFile.run(rolebotclient, message, args);
  } catch (err) {
    rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
  }
});

rolebotclient.on('messageUpdate', (oldMsg, newMsg) => {
  if (newMsg.author.bot) return;
  if ((newMsg.guild.id === '377259194211893248') && (newMsg.content.includes('youtube.com/')) && (!newMsg.guild.member(newMsg.author.id).roles.exists('name', 'Content Creators'))) {
    let muteRole = (newMsg.guild.roles.find('name', 'Muted'));
    newMsg.delete()
    newMsg.channel.send(`So uhm... You can't do that... Unless you're a content creator... So I'm gonna go ahead and mute you... ${newMsg.author.tag}`)
    newMsg.guild.member(newMsg.author.id).addRole(muteRole.id)
    newMsg.author.send(`Hey there, sorry if I muted you wrongfully, but you need the role \`Content Creators\` to send youtube links in ${newMsg.guild.name}`)
  }
  if (newMsg.content.indexOf('r!') !== 0) return;

  const args = newMsg.content.slice('r!'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandssss/${command}`);
    commandFile.run(rolebotclient, newMsg, args);
  } catch (err) {
    rolebotclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${newMsg.content}\nMessage author: ${newMsg.author.tag} ID: ${newMsg.author.id}\n \`\`\`${err.stack}\`\`\``);
  }
});

rolebotclient.login(process.env.ROLEBOTTOKEN);

alleyclient.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf('..') !== 0) return;



  sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
    if (!row) {
      sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.channel.send(`Ayeeee, you've leveled up to level **${curLevel}**! Ain't that dandy ${message.author.username}?`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run('CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)').then(() => {
      sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(alleyprefix)) return;

  if (message.content.startsWith(alleyprefix + 'level')) {
    sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
      if (!row) return message.channel.send('Welp... your current level is 0');
      message.channel.send(`Your current level is ${row.level}`);
    });
  } else if (message.content.startsWith(alleyprefix + 'givepoints')) {
    sql.open('./score.sqlite');
    sql.get(`SELECT * FROM scores WHERE userId ='${message.mentions.users.first().id}'`).then(row => {
      if (!row) {
        sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 0]);
      } else {
        sql.run(`UPDATE scores SET points = ${row.points + 50} WHERE userId = ${message.mentions.users.first().id}`);
        message.channel.send(`Gave ${message.mentions.users.first().username} 50 points`)
      }
    })
  }

  if (message.content.startsWith(alleyprefix + 'points')) {
    sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
      if (!row) return message.channel.send('Sadly you do not have any points yet... Talk more');
      message.channel.send(`${message.author.username} you currently have ${row.points} points, good going!`);

    });
  }

  const args = message.content.slice('..'.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commandsss/${command}`);
    commandFile.run(alleyclient, message, args);
  } catch (err) {
    alleyclient.channels.get('384821440844922882').send(`ERROR WHEN EXECUTING COMMAND: \`${command}\`\nCommand message: ${message.content}\nMessage author: ${message.author.tag} ID: ${message.author.id}\n \`\`\`${err.stack}\`\`\``);
  }



});
alleyclient.login(process.env.ALLEYTOKEN);
