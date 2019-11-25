const express = require('express')
const app = express()
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', function(req, res) {
    res.render('index', {
        na: 'AAA'
    })
})
var players = [
    { id: 1, name: 'Cristian Ronaldo' },
    { id: 2, name: 'Messi' },
    { id: 3, name: 'Neymar' },
    { id: 4, name: 'Hazard' },
    { id: 4, name: 'Persie' },
];
app.get('/players', function(req, res) {
    res.render('players/index', {

    })
})
app.get('/players/search', function(req, res) {
    var q = req.query.q;
    var match = players.filter(function(player) {
        return player.name.toLowerCase().indexOf(q) != -1;
    });
    res.render('players/player', {
        players: match
    });
});

app.listen(3000)