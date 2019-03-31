import React from 'react';
import { Link } from 'react-router-dom';

const Review = props => {
    return (
        <Link to={`/book/${props.data.bookId}`} className="card-review">
            <h4>Author: {props.data.author}</h4> 
            <small>{Date(props.data.createdOn).slice(0, 15)}</small>
            <p>{props.home && props.data.review.length > 70 ? (props.data.review.slice(0, 70) + '...') : props.data.review}</p>
        </Link>
    );
};

export default Review;