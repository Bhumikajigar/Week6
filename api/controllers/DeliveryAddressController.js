/**
 * DeliveryAddressController
 *
 * @description :: Server-side logic for managing deliveryaddresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){

  var params = req.params.all()

  DeliveryAddress.create({name: params.name}).exec(function createCB(err,created){
    return res.json({
      notice: 'Created user with name ' + created.name
    });
  });
}
};

