import { Schema } from 'mongoose';
import mongoose from '../index';

const reviewSchema = new Schema({
    author: {
        type: String,
        default: 'Anonymous'
    },
    review: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});

const Review = mongoose.model('Review', reviewSchema);

export default Review;