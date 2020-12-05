const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var session = require('express-session'); 
var fs = require("fs")
const cors = require('cors');

//app.set('views', __dirname + '/views');

//app.set('view engine', 'ejs'); 
//app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
	doc = '<h2>nice to meet you</h2><br/>'
	doc += '<a href ="/idList.html"> idList</a><br/>'
	doc += '<a href ="/index.html"> index</a><br/>'
	res.send(doc)
})



var static_handler = express.static(__dirname + '/views/');
app.use(static_handler);
//var users = require('./user-router'); 
//app.use('/user', users);
app.use(cors());

var server = app.listen(3000, function(){ 
console.log(`app listening at http://localhost:${port}`)
});
