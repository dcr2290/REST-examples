var Sequelize = require('sequelize');
var rdsDb = require('config').rdsDb;

var sequelize = new Sequelize('Re1717', 'hackathon', 'raweng@123', rdsDb);

sequelize.authenticate().then(function(err) {
	console.log('Connection has been established successfully.');
}).catch(function (err) {
	console.log('Unable to connect to the database:', err);
});