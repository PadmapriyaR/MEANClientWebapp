var webapp = angular.module('webapps',['ngStorage']);

webapp.controller('mainCtrl', function($scope, $http, $localStorage, $window, Event){
	console.log('Controller is working fine');
	$scope.results = {};
	$scope.storeSet = {};
	$scope.save = {};
	$scope.getDetails = {};
	$http.get('/showall').success(function(response){
		console.log('showall from controller');
		console.log(response);
		$scope.results = response;
		console.log($scope.results);
	});

	$scope.check = function(){
		console.log('init from details.html');
	};

	$scope.dispDetails = function(id){
		console.log('I am from dispDetails function');
		console.log(id);
		$http.get('/dispdetails/'+id).success(function(response){
			Event.setEvent(response);
			//storeSet = response;
			//console.log('storeSet : ',storeSet);	
			//console.log('local set: ', localStorage.setItem("set", JSON.stringify(storeSet)));
			//window.localStorage['set'] = angular.toJson(response);
			//$scope.storeSet = window.localStorage['set'];
			$localStorage.saved = response;
			console.log('localStorage');
			console.log($localStorage.saved = response);
			/*$scope.save = angular.toJson(response);
			localStorage.setItem('set',$scope.save);
			console.log($scope.save);
			$scope.getDetails = JSON.parse(localStorage['set']);
			console.log($scope.getDetails);*/
			//console.log(set);

			//window.location.href = '/details.html';
			window.open('details.html');
			//var get = localStorage.getItem(set);
			//console.log(get);
		});
		//console.log('$scope.getDetails:', $scope.getDetails);
		/*console.log('returining eve from setEvent :',Event.setEvent(id));
		console.log('$scope.eventDisp :', $scope.eventDisp);
		/*$http.get('/dispdetails/'+id).success(function(response){
			console.log(response);
			$scope.eventdetails = response;
			console.log($scope.eventdetails);
			Event.setEvent(response);
			//refresh();
			console.log('From service (getEvent):');
			console.log(Event.getEvent());
			$scope.eventde = Event.getEvent();
			console.log($scope.eventde);

			console.log('call back');
			
		});*/
	};

	$scope.get = function(){
		console.log('get function');
		$scope.getDetails = {};
		$scope.getDetails = $localStorage.saved;
		console.log('localStorage.saved:', $scope.getDetails);
		$scope.info = [$scope.getDetails.timings, $scope.getDetails.aboutagenda];
		console.log('$scope.info :',$scope.info);
		$scope.simage = $scope.getDetails.speakerimage;
		console.log('speakerimages ',$scope.getDetails.speakerimage);
	};

	console.log('Out of function : ', Event.getEvent());

	/*var refresh = function(data){
		/*$scope.events = data;	
		console.log($scope.events);
		console.log('from refresh:');
		console.log(data);
		Event.setEvent(data);
		console.log('From service:');
		console.log(Event.getEvent());
		$scope.eventde = Event.getEvent();
		console.log($scope.eventde);
	};*/
	$scope.refresh = function(){
		console.log('From refresh :');
		console.log(Event.getEvent());
		$scope.eventDetails = Event.getEvent();
	};

	$scope.init = function(){
		console.log('From init:');
		console.log(Event.getEvent());
		$scope.detailed = Event.getEvent();
	};
});

webapp.controller('eventCtrl', function($scope, $http, Event){
	$scope.dispevent = {};	
	console.log('eventCtrl');
	$scope.dispevent = Event.getEvent();
	console.log('$scope.dispevent :', $scope.dispevent);
	/*$scope.ed = {};
	console.log('From event controller');
	console.log(Event.getEvent());
	$scope.ed = Event.getEvent();
	$scope.refresh = function(){
		$scope.eventDetails = Event.getEvent();
		console.log('Event.getEvent : ', Event.getEvent());
		console.log('$scope.eventDetails :', $scope.eventDetails);
	};*/

});

webapp.service('Event', function($http){
	return {
		eve: {},
		getEvent: function(){
			console.log('this.eve to return :', this.eve);
			return this.eve;
		}, 
		setEvent: function(data){
			/*$http.get('/dispdetails/'+data).success(function(response){
				this.eve = response;
			});*/
			this.eve = data;
			console.log('this.eve' , this.eve);
		}
	}
});

/*webapp.factory('Event', function($http){
	var eve = [];
	var setEvent =function (data){
		$http.get('/dispdetails/'+data).success(function(response){
			console.log('From setEvent:', response);
			eve = response;
		});
		console.log('eve from setEvent: ', eve);
		return eve;
	};
	var getEvent = function (){
		console.log('Im getEvent return eve');
		console.log('eve : ', eve);
		return eve;
	};
	return {
		setEvent: setEvent,
		getEvent: getEvent
	};
});*/
