const router = require("express").Router()
const userCtrl = require("../controllers/userControllers")

router.route("/").get(userCtrl.getAllUsers).post(userCtrl.createUser)
router.route("/:id").get(userCtrl.getSingleUserById).put(userCtrl.updateUserById).delete(userCtrl.deleteUserById)

module.exports = router