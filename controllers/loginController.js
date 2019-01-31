var db = require('../connection/connection');
const User = require('../model/user.model');

module.exports = {
	login: function(req, res){


			User.find({
				'uname':req.body.uname,
				'pass':req.body.pass
			},function(err,user){
				 if (err) {
			        console.log(err);
			      } else {
			      	
			        if(user.length == 1){
			       		res.setHeader('Content-Type', 'application/json');
	        			res.send(JSON.stringify({ status: 1 }));
	        		}
	        		else{
	        			res.setHeader('Content-Type', 'application/json');
	        			res.send(JSON.stringify({ status: 0 }));
	        		}
			      }
			});
	

	}
}