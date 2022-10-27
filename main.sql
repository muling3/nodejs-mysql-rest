CREATE DATABASE IF NOT EXISTS <DATABASE_NAME>;
USE  <DATABASE_NAME>;

DROP TABLE IF EXISTS <TABLE_NAME>;

CREATE TABLE users_table(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    CONSTRAINT unique_user_email UNIQUE(email)
    );

INSERT INTO users_table(name, email, age) VALUES 
    ("Roy Fielding", "royfielding@gmail.com", 64),
    ("George Boole", "georgeb@hotmail.com", 72),
    ("Albert Einstein", "alberte@gmail.com", 94);