const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bookId: String,
    content: String,
    rating: Number
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);