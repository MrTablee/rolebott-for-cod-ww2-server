exports.run = (client, message, args) => {
    if(message.author.id !== '' ) return
    const mentionedID = args[0]
    const mentionedAmount = args[1]
    if(!args) {message.channel.send('You can\'t run this without any args')}
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
        points = JSON.parse(res.rows[0].points);
        console.log('After checking: ' + points);
        for(i=0;i<mentionedAmount;i++){
        points.points++;
        points.level++;
}
    database.query('UPDATE users SET points = $1 WHERE userId = $2', [JSON.stringify(points), mentionedID], (err, res) => {
        if (err) {console.log(err); return}
    });
});
}