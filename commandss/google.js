<<<<<<< HEAD
exports.run = (client, message, args) => {
    var google = require('google')
google.resultsPerPage = 1
    var ggle = message.content.replace("A!google ","")
    var nextCounter = 0
google(ggle, function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    message.channel.send("Results for: " + ggle + " " + link.href)
  }
 
  if (nextCounter < 0) {
    nextCounter += 1
    if (res.next) res.next()
  }
}) 
=======
exports.run = (client, message, args) => {
    var google = require('google')
google.resultsPerPage = 1
    var ggle = message.content.replace("A!google ","")
    var nextCounter = 0
google(ggle, function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    message.channel.send("Results for: " + ggle + " " + link.href)
  }
 
  if (nextCounter < 0) {
    nextCounter += 1
    if (res.next) res.next()
  }
}) 
>>>>>>> f44287ff42279570b8a50e31d58b2557b2fa74c2
 }