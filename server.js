var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/aadi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aadi.png'));
});
app.get('/ui/game.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'game.png'));
});
app.get('/ui/gameb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gameb.jpg'));
});
app.get('/ui/leaf.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'leaf.jpg'));
});
app.get('/ui/model.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'model.png'));
});
app.get('/ui/modelb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'modelb.jpg'));
});
app.get('/ui/present.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'present.png'));
});
app.get('/ui/presentb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'presentb.jpg'));
});
app.get('/ui/prog.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prog.png'));
});
app.get('/ui/progb.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'progb.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});