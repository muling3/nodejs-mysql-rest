const router = require("express").Router()
const prodCtrl = require("../controllers/productController")

router.route("/").get(prodCtrl.getAllProducts).post(prodCtrl.createProduct);
router
  .route("/:id")
  .get(prodCtrl.getProductById)
  .put(prodCtrl.updateProductById)
  .delete(prodCtrl.deleteProductById);

module.exports = router