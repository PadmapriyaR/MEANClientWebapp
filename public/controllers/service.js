angular.module('webapps' , [])
.factory('Events' , function(){
	console.log('im from service.js');

	return{
		all : function(){
			console.log('I m from service.js');
		}
	};
});