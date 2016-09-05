var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var mongojs = require("mongojs");
var db = mongojs('mongodb://metoomentordb:metoomentordb@ds023490.mlab.com:23490/metoomentordb', ['AngularizeApp']);

mongoose.connect('mongodb://metoomentordb:metoomentordb@ds023490.mlab.com:23490/metoomentordb');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/showall', function (req, res) {
	console.log('I am ready to show the web content');
	db.AngularizeApp.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/dispdetails/:id', function (req, res) {
	var id = req.params.id;
	console.log('It is api/s id' + id);
	db.AngularizeApp.findOne({_id: mongojs.ObjectId(id)}, function (err, docs) {
		if(err)
			res.send(err);
		else
			console.log(docs);
			res.json(docs);
	});
});

app.listen(process.env.PORT || 8080);
console.log('Magic is happening on port 8080!');
