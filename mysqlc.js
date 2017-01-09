var mysql = require('mysql');

var mySql = function () {
	this.connection = mysql.createConnection({
		// host: process.env.OPENSHIFT_MYSQL_DB_HOST,
		// port: process.env.OPENSHIFT_MYSQL_DB_PORT,
		// user: 'adminV7WQk22',
		// password: 'jXwAulFqDafM',
    host: "localhost",
		port: "3306",
		user: 'root',
		password: '',
		database: 'answer'
	});
	this.connection.connect();
};

mySql.prototype.query = function (query, param) {
	return new Promise(function(resolve, reject) {
    try{
      this.connection.query(query, param, function (err, result) {
        if(err){
          reject(err);
        }
        resolve(result);
      });
    }catch(e){
      console.log(require('util').inspect(e, { depth: null }));
    }
	}.bind(this));
};

mySql.prototype.getConnection = function(){
	return this.connection;
};

module.exports = mySql;
