import { Schema } from 'mongoose';
import mongoose from '../index';

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;