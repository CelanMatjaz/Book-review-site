import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/book_list', { useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('Connection established');
}).on('error', error => {
    console.log('Connection error:', error);
});

export default mongoose;