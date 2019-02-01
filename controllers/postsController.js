var db = require('../connection/connection');
const Post = require('../model/posts.model');

module.exports ={
	getPosts : function(req,res){

			Post.find({},function(err,posts){
				 if (err) {
			        console.log(err);
			      } else {
			      	
			        res.setHeader('Content-Type', 'application/json');
	        		res.send(posts);
			      }
			});
			
	
	},

	createPost : function(req,res){

		let post = new Post(
			{
				title: req.body.title,
				body: req.body.body
			}
		);

		post.save(function (err) {
	        if (err) {
	        	console.log(err);
	            return;
	        }
	        res.setHeader('Content-Type', 'application/json');
	        res.send(JSON.stringify({ status: 1 }));
	    })

	}
}