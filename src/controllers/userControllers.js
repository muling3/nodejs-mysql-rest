const dbConfig = require("../config/db.config");
const queries = require("../queries/queries")

//Get connection Promise
const promisePool = dbConfig();

const getAllUsers = async (req, res) => {
  try {
    let [rows, _] = await promisePool.query(
     queries.GET_ALL_USERS
    ); //returns  the resultSet and the fields set

    res.status(200).json({ message: "Fetched users successfully", ok: true, rows });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch users", ok: false, error: error.message });
  }
};

const getSingleUserById = async (req, res) => {
  try {
    let [rows, _] = await promisePool.query(
      queries.GET_USER + `${req.params.id}`
    );

    if (!rows[0]){
      res
        .status(404)
        .json({
          message: "User not found",
          ok: false,
        });
        return
    }

    res
      .status(200)
      .json({ message: "Fetched user successfully", ok: true, user: rows[0] });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user", ok: false, error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const result = await promisePool.query(
      queries.CREATE_USER,
      Object.values(req.body)
    );

    res.status(201).json({ message: "Created user successfully", ok: true, result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", ok: false, error: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    let result = await promisePool.query(
      queries.UPDATE_USER + `${req.params.id}`,
      Object.values(req.body)
    );

    res.status(200).json({ message: "Updated user successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user", ok: false, error: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    let result = await promisePool.query(
        queries.DELETE_USER+`${req.params.id}`
    );

    res.status(200).json({ message: "Deleted user successfully", ok: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete user", ok: false, error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
