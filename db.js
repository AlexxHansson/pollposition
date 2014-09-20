var mysql = require('mysql');

var connString = 'mysql://pollposition:pollposition@localhost/pollposition';

var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'pollposition',
	password: 'pollposition'
});

/**
 * Simple wrapper to query the db.
 * Will use the underlying connection pooling.
 * @param {string} q - the SQL-query
 * @param {function} cb - the callback if the query is successful. Receives the result as argument.
 * @param {function} errCb - the callback if the query is not successful. Error is the first argument.
 */
function query(q, cb, errCb) {
	pool.query(q, function(err, rows, fields) {
		if (err) {
			console.warn('sql error', err);
			errCb(err);
		}
		else {
			cb(rows, fields);
		}
	});
}