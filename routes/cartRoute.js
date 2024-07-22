const express = require("express")
const cartController = require("../controllers/cartController")
const { auth } = require("../middleware/auth")

const router = express.Router()

router.post("/api/add-to-cart",auth, cartController.addToCart )
router.get("/api/cart", auth, cartController.getCart)
router.post("/api/update-quantity", auth, cartController.updateQuantity)
router.post("/api/remove-item", auth, cartController.removeItem)

module.exports = router