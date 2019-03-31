import React from 'react';
import { Link } from 'react-router-dom';

const Book = props => {
    return (
        <Link to={`/book/${props.data.id}`} className="card-book">
            <h4>Title: {props.data.title}<small> by {props.data.author}</small></h4>
            Genre: {props.data.genre}
            
        </Link>
    );
};

export default Book;