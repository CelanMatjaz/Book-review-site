import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import BookFeed from '../books/BookFeed';
import ReviewFeedHome from '../reviews/ReviewFeedHome';

class Home extends Component {
    render() {
        return (
            <>               
                <div className="home">
                    <div className="home-books">
                        <BookFeed home={true}/>
                    </div>
                    <div className="home-reviews">
                        <ReviewFeedHome home={true}/>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;