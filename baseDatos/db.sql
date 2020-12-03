CREATE DATABASE database_info

USE database_info

CREATE TABLE users(
    id INT(11) NOT NULL,
    usernamer VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY(id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

    DESCRIBE users;