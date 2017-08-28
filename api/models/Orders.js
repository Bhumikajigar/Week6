/**
 * Orders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id:
  	{
  	 type: 'string',
  	 required: true
  	},
  	customerId: {
  		type:'string',
  		required: true

  	},
  	registered: {
  		type: 'string',
  		required: true
  	},
  	deliveryAddId:
  	{
  	 type: 'string',
  	 required: true
  	},
  	paymentType: {
  		type:'string',
  		required: true

  	},
  	date: {
  		type: 'string',
  		required: true
  	},
  	date:
  	{
  	 type: 'string',
  	 required: true
  	},
  	status: {
  		type:'string',
  		required: true

  	},
  	session: {
  		type: 'string',
  		required: true
  	},
  	total: {
  		type: 'string',
  		required: true
  	},


  }
};

