/* import as: mysql -u root -p < init.sql */

USE wcs_homers_odyssey;

CREATE TABLE users
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(90) UNIQUE,
    password VARCHAR(90),
    name VARCHAR(90),
    lastname VARCHAR(90)
);