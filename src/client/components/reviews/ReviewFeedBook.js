import React from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router-dom';

//Components
import ReviewBook from './ReviewBook';

const ReviewFeed = props => {
    const reviews = props.reviews.map(review => <ReviewBook key={review.id} data={review}/>);
    return (
        <>
            <header>
                <h3 style={{display: 'inline-block'}}>Reviews</h3>
                {props.home ? '' : <button style={{float: 'right'}}onClick={props.toggleForm}>{props.showForm ? 'Close form' : 'Write a review'}</button>}
            </header>
            <div className="review-feed">      
                {reviews.length > 0 ? reviews : <p>No reviews yet...</p>}
            </div>
        </>
    );
};

export default withRouter(ReviewFeed);