import React, { Component } from 'react';
import { Query } from 'react-apollo';

//Components
import BookData from './BookData';
import ReviewFeedBook from '../reviews/ReviewFeedBook';
import ReviewForm from '../reviews/ReviewForm';

//Queries
import { getBook } from '../../queries/book.queries';

class Book extends Component {

    state = {
        showForm: false
    }

    toggleForm = () => {
        this.setState(prevState => ({showForm: !prevState.showForm}));
    }

    render() {
        const bookId = this.props.match.params.id
        return (
            <div className="book">
                <Query query={getBook} variables={{ bookId }}>
                    {({ loading, error, data, refetch }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error!: ${error}`;
                        return (
                            <>
                                <BookData data={data.Book} />
                                <div>
                                    {this.state.showForm ? <ReviewForm refetch={refetch}/> : ''}
                                    <ReviewFeedBook 
                                        reviews={data.Book.reviews.reverse()} 
                                        toggleForm={this.toggleForm} 
                                        showForm={this.state.showForm}
                                    />
                                </div>                                    
                            </>
                        )
                    }}
                </Query>
            </div>
        );
    }
}

export default Book;