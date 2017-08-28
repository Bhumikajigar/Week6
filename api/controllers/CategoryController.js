/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'index':function(req, res)
	{
		res.view();
	},

	create :function(req, res, next)
	{
		Category.create(req.params.all(), function userCreated(err, user){
			if(err) return next(err);
			res.redirect('/Category/show/?cid='+ user.cid);
		});
	},

	'Show_Record': function(req, res, next){
		Category.find(function foundUser(err, users){
			if (err) return next(err);
			if (!users) return next();
  		res.view({ 
				users: users
	    });
		});
	},

	'View_Record': function(req, res, next){
		Category.findOne(req.param('id'), function foundUser(err, user){
			if (err) return next(err);
			if (!user) return next();
			res.view({ 
				user: user
			});
		});
	},

	'Delete_Record': function(req, res, next){
		Category.destroy(req.param('cid')).exec(function (err){
  				if (err) {
    				return res.negotiate(err);
  					}
  					sails.log('record have now been deleted, succesfully');
 				    return res.ok();
		  });
	  }
  };

 
