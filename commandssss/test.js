exports.run = (client, message, args) => {
var Canvas = require('canvas')
var jimp = require('jimp')
 
const w = ['Test'];
 
        let Image = Canvas.Image,
            canvas = new Canvas(802, 404),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 730, 300);
 
})
 
                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
       
       
             //wl
                        ctx.font = '30px Arial Bold';
                        ctx.fontSize = '30px';
                        ctx.fillStyle = "#000000";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 430, 160);
                       
                      //ur name
                        ctx.font = '25px Arial';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("", 430, 210);
                       
                                //Avatar
                                let Avatar = Canvas.Image;
                                let ava = new Avatar;
                                ava.src = buf;
                                ctx.beginPath();
                                ctx.arc(150, 152, 120, 0, Math.PI*2, true);
                                ctx.closePath();
                                ctx.clip();
                               
                                ctx.drawImage(ava, 26, 26, 240, 255);
                               
                                ctx.closePath();
 
                       
                                         
client.channels.get("geeksquad").sendFile(canvas.toBuffer())
 
 
 
 
})
})
 
 
}}
