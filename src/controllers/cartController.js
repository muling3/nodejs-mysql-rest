const dbConfig = require("../config/db.config");
const queries = require("../queries/queries")

//Get connection Promise
const promisePool = dbConfig();

const getAllCartItems = async (req, res) => {
  try {
    let [rows, _] = await promisePool.query(
      queries.GET_ALL_CART_ITEMS
    ); //returns  the resultSet and the fields set

    res.status(200).json({ message: "Fetched cart items successfully", ok: true, rows });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch cart items", ok: false, error: error.message });
  }
};

const getUserSpecificCartItems = async (req, res) => {
  try {
    let [rows, _] = await promisePool.query(
      queries.GET_USER_CART_ITEMS +`${req.params.id}`
    );

    res
      .status(200)
      .json({ message: "Fetched cart items successfully", ok: true, rows });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch cart items", ok: false, error: error.message });
  }
};

const addCartItemToSpecificUser = async (req, res) => {
  try {
    const result = await promisePool.query(
      queries.ADD_CART_ITEM_TO_USER,
      Object.values(req.body)
    );

    res.status(201).json({ message: "Created cart item successfully", ok: true, result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create cart item", ok: false, error: error.message });
  }
};

const updateCartItemStatus = async (req, res) => {
  try {
    let result = await promisePool.query(
      queries.UPDATE_CART_ITEM_STATUS + `${req.params.id}`,
      Object.values(req.body)
    );

    res.status(200).json({ message: "Updated cart item successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update cart item", ok: false, error: error.message });
  }
};

const updateCartItemQuantity = async (req, res) => {
  try {
    let result = await promisePool.query(
      queries.UPDATE_CART_ITEM_QUANTITY + `${req.params.id}`,
      Object.values(req.body)
    );

    res.status(200).json({ message: "Updated cart item successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update cart item", ok: false, error: error.message });
  }
};

const deleteCartItemFromSpecificUser = async (req, res) => {
  try {
    let result = await promisePool.query(
      queries.REMOVE_CART_ITEM + `${req.params.id}`
    );

    res.status(200).json({ message: "Deleted cart item successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete cart item", ok: false, error: error.message });
  }
};

module.exports = {
  getAllCartItems,
  getUserSpecificCartItems,
  addCartItemToSpecificUser,
  updateCartItemStatus,
  updateCartItemQuantity,
  deleteCartItemFromSpecificUser,
};
