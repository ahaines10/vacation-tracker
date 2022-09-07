const express = require("express");
const router = express.Router();
const vacationsCtrl = require("../../controllers/api/vacations");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/vacations
router.post("/new", ensureLoggedIn, vacationsCtrl.create);

module.exports = router;
