const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var session = require('express-session'); 
var fs = require("fs")
const cors = require('cors');

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){ 
console.log(`Example app listening at http://localhost:${port}`)
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})


var users = require('./user-router'); 
app.use('/user', users);
app.use(cors());
