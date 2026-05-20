const express = require("express");
const { createReview, getReviews } = require("../controllers/reviewController");
const { verifyToken } = require("../middlewares/auth");

const router = express.Router();

router.post("/", verifyToken, createReview);
router.get("/:bookId", getReviews);

module.exports = router;