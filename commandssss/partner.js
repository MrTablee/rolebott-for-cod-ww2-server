exports.run = (client, message, args) => {
    if (!args[0]) {
        message.channel.send('How to become a partner:\n\n:one:I, Mr.Table#1352, must be in the server.\n\n:two:I must recieve some kind of way of other\'s knowing I am partnered with you, whether it be via role, announcement, channel, etc.\n\n:three:Server must have at least 500 users, preferably active.\n\n:four:Server must have more users than bots by a ratio of at least 10:1(1 bot per 10 users at the most).\n\n:five:Must have at least 1 of my bots in the server.')
    }

    if (args[0] === '1') {
        message.channel.send('**Call Of Duty Community Server**');
    }

    if (args[0] === '2') {
        message.channel.send('**Striker\'s Coding Cave**\n\nStriker made this server to be a humble home to all of his Discord Bots.\nThe server is very active, and personally I think it is awesome.');
    }
    if (args[0] === '3') {
        message.channel.send("__Hey there!__\n\nIf you're into any kind of gaming or just want to chat with people, we got you!\n\nWith over 1.5k members, there's always someone to chat with, and if you want to do other sutff, we got alot of fun bots, a leveling system and MEMES! :stuck_out_tongue:\nWe have a music bot that you can use to play music in the background while you do other stuff, or a bot that you can create your own memes with!\nYou can request access to a private vc to talk to your friends, or join a public voice chat and talk to new people!\nYou get experience for talking which you will unlock certain roles and abilities with, and which will get you levels on the server! :D\n`We're also developing our own bot that you can request features for!`\nIf you decide to come and hang out with us on Acination, we'd be very excited to chat with you! \nThanks for reading this and have an awesome day!\n\n:key: https://discord.gg/HpwxAnT")
                             }
};
