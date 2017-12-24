exports.run = (client, message, args) => {
    try {
        database.query('SELECT points FROM users WHERE userId = $1', [message.author.id], (err, res) => {
            if (err) {console.log(err); return}
            let points = res.rows[0];
            if (!points) {points = {
                points: 0,
                level: 0
            };
            database.query('INSERT INTO users (points, userId) VALUES ($1, $2)', [JSON.stringify(points), message.author.id]);
            }
            else points = JSON.parse(res.rows[0].points);
            points.points++
            points.points++
            points.points++
            points.points++
            points.points++
            
        
});
    } catch(err){message.channel.send(err)}
};