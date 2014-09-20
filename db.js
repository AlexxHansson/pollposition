var pg = require('pg');

var connString = 'postgres://pollposition:pollposition@localhost/pollposition';

/**
 * Simple wrapper to query the db.
 * Will use the underlying connection pooling, reusing connections between requests.
 * @param {string} q - the SQL-query
 * @param {function} cb - the callback if the query is successful. Receives the result as argument.
 * @param {function} errCb - the callback if the query is not successful. Error is the first argument.
 */
function query(q, cb, errCb) {
	pg.connect(connString, function(err, client, done) {
		if (err) {
			errCb(err);
			return console.warn('pg connection error', err);
		}

		client.query(q, function(err, result) {
			done();
			
			if (err) {
				errCb(err);
				return console.warn('pg query error', err);
			}

			cb(result);
		});
	});
}