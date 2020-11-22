var express = require('express');
var router = express.Router();


console.log("START Dudukri");


router.get('/', function(req, res){ 
 
	if(req.query.html != null) {
		console.log("/" + req.query.html)
		res.render(req.query.html);
	} else {
		console.log("/index.html")
		res.render('index.html'); 
	}
}) 

router.get('/new', function(req, res){ 
console.log("start dudukri/company"); 
res.render('user/createUser.html'); 
}) 



module.exports = router;
