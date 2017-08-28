/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

attributes: {
  	id: {
  		type:'string',
  		required: true
  	},
  	firstName: {
  		type:'string',
  		required:true
  	},
  	surname:{
  		type:'string',
  		required:true

  	},
  	add1: {
  		type:'string',
  		require:true

  	},
  	add2: {
  		type:'string',
  		require:true

  	},
  	add3: {
  		type:'string',
  		require:true

  	},
  	postcode: {
  		type:'string',
  		require:true

  	},
  	phone: {
  		type:'string',
  		require:true

  	},
  	email: {
  		type:'string',
  		require:true

  	},
  	registered:{
  		type:'string',
  		require:true

  	},
  	
  	
  	

  }
};

