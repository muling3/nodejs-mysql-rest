GET_ALL_USERS = `SELECT * FROM ${process.env.USER_TABLE}`;
CREATE_USER = `INSERT INTO ${process.env.USER_TABLE}(username, email, password) VALUES(?, ?, ?)`;
UPDATE_USER = `UPDATE ${process.env.USER_TABLE} SET username = ?, email = ?, password = ? WHERE id=`;
DELETE_USER = `DELETE FROM ${process.env.USER_TABLE} WHERE id=`;
GET_USER = `SELECT * FROM ${process.env.USER_TABLE} WHERE id=`;

//productQueries
GET_ALL_PRODUCTS = `SELECT * FROM ${process.env.PRODUCT_TABLE}`;
CREATE_PRODUCT = `INSERT INTO ${process.env.PRODUCT_TABLE}(name, price, quantity, image_url) VALUES(?, ?, ?, ?)`;
UPDATE_PRODUCT = `UPDATE ${process.env.PRODUCT_TABLE} SET name = ?, price = ?, quantity = ?, image_url = ? WHERE id=`;
DELETE_PRODUCT = `DELETE FROM ${process.env.PRODUCT_TABLE} WHERE id=`;
GET_PRODUCT = `SELECT * FROM ${process.env.PRODUCT_TABLE} WHERE id=`;

//cartQueries
GET_ALL_CART_ITEMS = `SELECT * FROM ${process.env.CART_TABLE}`;
GET_USER_CART_ITEMS = `SELECT * FROM ${process.env.CART_TABLE} WHERE customer_id=`;
ADD_CART_ITEM_TO_USER = `INSERT INTO ${process.env.CART_TABLE}(customer_id, product_id, product_name, product_price, product_quantity, product_image_url, product_status) VALUES(?, ?, ?, ?, ?, ?, ?)`;
UPDATE_CART_ITEM_STATUS = `UPDATE ${process.env.CART_TABLE} SET product_status = ? WHERE id=`;
UPDATE_CART_ITEM_QUANTITY = `UPDATE ${process.env.CART_TABLE} SET product_quantity = ? WHERE id=`;
REMOVE_CART_ITEM = `DELETE FROM ${process.env.CART_TABLE} WHERE id=`;

module.exports = {
  GET_ALL_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USER,
  GET_ALL_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_ALL_CART_ITEMS,
  GET_USER_CART_ITEMS,
  ADD_CART_ITEM_TO_USER,
  UPDATE_CART_ITEM_STATUS,
  UPDATE_CART_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
};
