const express = require("express");
const router = express.Router();
const vacationsCtrl = require("../../controllers/api/vacations");
const commentsCtrl = require("../../controllers/api/comments");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// POST /api/vacations
router.post("/new", ensureLoggedIn, vacationsCtrl.create);
router.post("/:id", ensureLoggedIn, commentsCtrl.create);
router.delete("/:vid/comments/:cid", ensureLoggedIn, commentsCtrl.delete);
router.get("/:id/edit", ensureLoggedIn, commentsCtrl.edit);
router.get("/", ensureLoggedIn, vacationsCtrl.get);
module.exports = router;
