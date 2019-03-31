import React from 'react';

const BookData = props => {
    const { author, title, genre } = props.data;
    return (
        <div className="book-data">
            <h2>{title}</h2>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
        </div>
    );
};

export default BookData;