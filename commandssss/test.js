exports.run = (client, message, args) => {
    let mentionedID = args[0] || message.mentions.first().id || message.author.id;
    const pg = require('pg')
    const database = new pg.Client({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    });
    database.connect();

    database.query('SELECT points FROM users WHERE userId = $1', [mentionedID], (err, res) => {
        if (err) {console.log(err); return}
        let points = res.rows[0];
        if(!points){message.channel.send('This user currently has no database stats')}
        else points = JSON.parse(res.rows[0].points);
        let usrPoints = points.points
        let usrLevel = points.level
        if(mentionedID != message.author.id){
message.channel.send(`This users stats are:\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}`)
} else if(mentionedID == 'message.author.id'){
    message.channel.send(`<@${mentionedID}>'s stats are:\nCurrent Level: ${usrLevel}\nCurrent Points: ${usrPoints}`)
    
}
    });
}