import React from 'react';
import { graphql, compose } from 'react-apollo';

//Components
import Review from './Review';

//Queries
import { getReviews } from '../../queries/review.queries';

const ReviewFeed = props => {
    const displayData = ({loading, error, Reviews}) => {
        if(loading) return 'Loading reviews...';
        if(error) return `Error!: ${error}`;
        return Reviews.map(review => <Review key={review.id} data={review}/>)
    }

    return (
        <>
            <header>
                <h3>Reviews</h3>
            </header>
            <div className="review-feed">   
                {displayData(props.data)}
            </div>
        </>
    );
};

export default compose(
    graphql(getReviews, 'getReviews')
)(ReviewFeed);