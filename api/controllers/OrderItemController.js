/**
 * OrderItemController
 *
 * @description :: Server-side logic for managing orderitems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
  var params = req.params.all()

  OrdetItem.create({name: params.name}).exec(function createCB(err,created){
    return res.json({
      notice: 'Created user with name ' + created.name
    });
  });
}
};

