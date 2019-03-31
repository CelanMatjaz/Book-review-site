import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

//Components
import ReviewFormP from './ReviewFormP';

//Queries
import { addReviewMutation, getReviews } from '../../queries/review.queries';

class ReviewForm extends Component {

    state = {
        author: '',
        review: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.review){
            this.props.addReviewMutation({
                refetchQueries: [{ query: getReviews }],
                variables: {
                    author: this.state.author,
                    review: this.state.review,
                    bookId: this.props.match.params.id
                }
            });
    
            this.setState({
                author: '',
                review: ''            
            })
    
            this.props.refetch();
        }        
    }

    render() {
        return (
            <ReviewFormP data={this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        );
    }
}

export default withRouter(compose(
    graphql(addReviewMutation, { name: 'addReviewMutation' })
)(ReviewForm));