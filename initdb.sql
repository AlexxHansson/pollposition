CREATE DATABASE pollposition;

CREATE USER 'pollposition'@'localhost' IDENTIFIED BY 'pollposition';
GRANT ALL ON pollposition.* TO 'localhost'@'pollposition';

CREATE TABLE users (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	origin_id VARCHAR(255) NOT NULL,
	origin_type VARCHAR(255) NOT NULL,
	PRIMARY KEY(id)
) Engine=InnoDB;

CREATE TABLE polls (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	question TEXT,
	users_id INTEGER UNSIGNED NOT NULL,
	CONSTRAINT idx_polls_users FOREIGN KEY fk_polls_users (users_id) REFERENCES users(id)
		ON DELETE CASCADE,
	PRIMARY KEY(id)
) Engine=InnoDB;

CREATE TABLE polloptions (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	description TEXT NOT NULL,
	polls_id INTEGER UNSIGNED NOT NULL,
	CONSTRAINT idx_polloptions_polls FOREIGN KEY fk_polloptions_polls (polls_id) REFERENCES polls(id)
		ON DELETE CASCADE,
	PRIMARY KEY (id)
) Engine=InnoDB;

CREATE TABLE votes (
	id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
	voted_at DATETIME NOT NULL,
	polls_id INTEGER UNSIGNED NOT NULL,
	users_id INTEGER UNSIGNED NOT NULL,
	polloptions_id INTEGER UNSIGNED NOT NULL,
	CONSTRAINT idx_votes_polls FOREIGN KEY fk_votes_polls (polls_id) REFERENCES polls(id)
		ON DELETE CASCADE,
	CONSTRAINT idx_votes_users FOREIGN KEY fk_votes_users (users_id) REFERENCES users(id)
		ON DELETE CASCADE,
	CONSTRAINT idx_votes_polloptions FOREIGN KEY fk_votes_polloptions (polloptions_id) REFERENCES polloptions(id)
		ON DELETE CASCADE,
	PRIMARY KEY(id)
) Engine=InnoDB;