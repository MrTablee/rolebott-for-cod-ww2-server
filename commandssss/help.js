exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send('**DMing you a list of commands!**');
        message.author.sendEmbed({
            color: (Math.floor(Math.random() * (16777215 - 1 + 1))) + 1,
            description: "Commands:\ndaily (Collect daily rewards)\nredeemreward (Redeems one of your rewards)\nupgradereward (Upgrades your reward level)\nbuyxp (Buys xp)\nCoinflip (Betting)\nguessnumber (Betting)\nkillzombie (Kills a zombie)\nsetprefix (Sets your prefix)\nprefix (Shows your current prefix)\noverwriteprefix (Owner)\naddaward (Owner)\naddrole (Adds a role to you)\ncheckstats (Check stats of another user)\nemit (Owner)\nemitnewmember (Owner)\neval (Owner)\ngoogle (Googles something)\nhelp (Sends this message)\njoinme (Nothing)\nkick (Kicks a user)\nmanual (Manually adds a role to a user)*Alias:: m*\nmute (Mutes a user)\npartner (More info on a partner)\npartners (Shows a list of partners)\nping (Shows bot's ping)\nprune (Prunes Messages)\nrandomcolor (Gives a random color)\nrate (Rates something)\nreboot (Owner)\nreset (Owner)\nsay (Owner)\nserverstats (Gives stats on a server)\nsetlevels (Owner)\nsetpoints (Owner)\nSP (Owner)\nstats (Checks your stats)\nsupport (Support the bot! :D)\ntakelevels (Owner)\ntakepoints (Owner)\ntakerole (Takes a role from you)\nunmute (Unmutes a user)\nuptime (Uptime of the bot)\nurban (Search urban dictionary for something!)\nwhereami (Use if you're lost!)\nwhoami (Forgot who you are? Happens sometimes!)\nyoutube (Search youtube!) *Alias: yt*"
        });
    }
    if (args[0] == 'test') {
        message.channel.send('Test failed');
    }
};
