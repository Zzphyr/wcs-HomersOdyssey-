const mysql = require('mysql');
const keys = require('./../../keys');

/* The database connector will be available from any file via:
const connection = require('./helpers/db.js');*/

const connection = mysql.createConnection({
   host: 'localhost',
   user: keys.MYSQL_USERNAME,
   password: keys.MYSQL_PASSWORD,
   database: 'wcs_homers_odyssey'
});

module.exports = connection;