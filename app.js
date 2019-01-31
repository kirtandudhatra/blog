const express = require('express')
const bodyParser = require('body-parser');
const logindata = require('./controllers/loginController');
const postdata = require('./controllers/postsController');
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('view'));

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/view/login.html');
});
app.post('/login',function (req, res) {
   logindata.login(req,res);
});
app.get('/home', function (req, res) {
   res.sendFile(__dirname + '/view/home.html');
});
app.get('/posts',function (req, res) {
   postdata.getPosts(req,res);
});
app.post('/createpost',function (req, res) {
   postdata.createPost(req,res);
});

app.listen(3000);