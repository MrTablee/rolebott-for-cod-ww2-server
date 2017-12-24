exports.run = (client, message, args) => {
    try {
        database.query('SELECT points FROM users WHERE userId = $1', [message.mentions.first().id], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            console.log('Before checking: '+points);
            if (!points) {points = {
                points: 0,
                level: 0
            };
            database.query('INSERT INTO users (points, userId) VALUES ($1, $2)', [JSON.stringify(points), message.author.id]);
            }
            else points = JSON.parse(res.rows[0].points);
            console.log('After checking: '+points);
           
            for(i=0;i<100;i++){
            points.points++;
            }
        
});
    } catch(err){message.channel.send(err)}
};