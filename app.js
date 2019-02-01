const express = require('express');
var session = require('express-session');
const bodyParser = require('body-parser');
const logindata = require('./controllers/loginController');
const postdata = require('./controllers/postsController');
var app = express();
app.use(session({secret: 'secretkey', saveUninitialized : true, resave : true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('view'));

app.get('/', function (req, res) {
	if(!req.session.uname){
   		res.sendFile(__dirname + '/view/login.html');
	}
   else{
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.end("<script>window.location.replace('/home');</script>");
	}
});
app.post('/login',function (req, res) {

		logindata.login(req,res);		  	
 
});
app.get('/home', function (req, res) {
	if(!req.session.uname){
		res.writeHead(200,{'Content-Type': 'text/html'});
		res.end("<script>alert('Login Required!');window.location.replace('/');</script>");
		  	
	}
	else{

   		res.sendFile(__dirname + '/view/home.html');
   	}
});
app.get('/posts',function (req, res) {
	if(!req.session.uname){
		res.writeHead(200,{'Content-Type': 'application/json'});
		res.end(JSON.stringify({status: 0}));
		  	
	}
	else{
   		postdata.getPosts(req,res);
   	}
});
app.post('/createpost',function (req, res) {
	if(!req.session.uname){
		res.writeHead(200,{'Content-Type': 'application/json'});
		res.end(JSON.stringify({status: 0}));
		  	
	}
	else{
   		postdata.createPost(req,res);
   	}
});
app.get('/logout', function(req, res){
	req.session.destroy(function(err) {
		  if (err){

		    	res.writeHead(200,{'Content-Type': 'application/json'});
		  		res.end(JSON.stringify({status: 0}));
		  	
		    }
		   else{
		   		res.writeHead(200,{'Content-Type': 'application/json'});
		  		res.end(JSON.stringify({status: 1}));
		  	
		   }
		});

});

app.listen(3000);