const dbConfig = require("../config/db.config");
const queries = require("../queries/queries");

//Get connection Promise
const promisePool = dbConfig();

const getAllProducts = async (req, res) => {
  try {
    let [rows, _] = await promisePool.query(queries.GET_ALL_PRODUCTS); //returns  the resultSet and the fields set

    res
      .status(200)
      .json({ message: "Fetched products successfully", ok: true, rows });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch products",
        ok: false,
        error: error.message,
      });
  }
};

const getProductById = async (req, res) => {
  try {
    let [rows, _] = await promisePool.query(
      queries.GET_PRODUCT + `${req.params.id}`
    );
    if (!rows[0]) {
      res.status(404).json({
        message: "Product not found",
        ok: false,
      });
      return;
    }

    res
      .status(200)
      .json({
        message: "Fetched product successfully",
        ok: true,
        product: rows[0],
      });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to fetch product",
        ok: false,
        error: error.message,
      });
  }
};

const createProduct = async (req, res) => {
  try {
    const result = await promisePool.query(
      queries.CREATE_PRODUCT,
      Object.values(req.body)
    );

    res
      .status(201)
      .json({ message: "Created product successfully", ok: true, result });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to create product",
        ok: false,
        error: error.message,
      });
  }
};

const updateProductById = async (req, res) => {
  try {
    let result = await promisePool.query(
      queries.UPDATE_PRODUCT + `${req.params.id}`,
      Object.values(req.body)
    );

    res.status(200).json({ message: "Updated product successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to update product",
        ok: false,
        error: error.message,
      });
  }
};

const deleteProductById = async (req, res) => {
  try {
    let result = await promisePool.query(
      queries.DELETE_PRODUCT + `${req.params.id}`
    );

    res.status(200).json({ message: "Deleted product successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Failed to delete product",
        ok: false,
        error: error.message,
      });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
