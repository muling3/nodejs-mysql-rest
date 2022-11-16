CREATE DATABASE IF NOT EXISTS <DATABASE_NAME>;
USE  <DATABASE_NAME>;

DROP TABLE IF EXISTS <TABLE_NAME>;

CREATE TABLE users_table(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT unique_user_email UNIQUE(email)
    );

CREATE TABLE products_table(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    quantity INT NOT NULL,
    image_url VARCHAR(255),
    CONSTRAINT unique_product_name UNIQUE(name)
    );


CREATE TABLE cart_table(
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    product_id INT NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_price DOUBLE NOT NULL,
    product_quantity INT NOT NULL,
    product_image_url VARCHAR(255),
    product_status VARCHAR(255) NOT NULL
    );

-- INSERT INTO users_table(name, email, age) VALUES 
--     ("Roy Fielding", "royfielding@gmail.com", 64),
--     ("George Boole", "georgeb@hotmail.com", 72),
--     ("Albert Einstein", "alberte@gmail.com", 94);