const express = require("express")
const categoryController = require("../controllers/categoryController")
const router = express.Router()
const {auth, admin} = require("../middleware/auth")

router.post("/api/category", auth, admin, categoryController.createCategory)
router.get("/api/category", categoryController.category)

module.exports = router