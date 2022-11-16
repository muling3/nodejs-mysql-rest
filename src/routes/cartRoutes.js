const router = require("express").Router();
const cartCtrl = require("../controllers/cartController");

router.get("/", cartCtrl.getAllCartItems);
router.get("/:id", cartCtrl.getUserSpecificCartItems);
router.post("/", cartCtrl.addCartItemToSpecificUser);
router.put("/status/:id", cartCtrl.updateCartItemStatus);
router.put("/quantity/:id", cartCtrl.updateCartItemQuantity);
router.delete("/:id", cartCtrl.deleteCartItemFromSpecificUser);

module.exports = router;
