import React, { Component } from 'react';
import { graphql } from 'react-apollo';

//Components
import AddBookP from './AddBookP';

//Queries
import { addBookMutation } from '../../queries/book.queries';

class AddBook extends Component {
    state = {
        title: '',
        genre: '',
        author: '',
        showForm: false
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { title, genre, author } = this.state;    
        if(title, genre, autor){
            this.props.addBookMutation({
                variables: {
                    title: title,
                    genre: genre,
                    author: author
                }           
            });
    
            this.setState({
                title: '',
                author: '',
                genre: ''
            });
    
            this.props.refetch();
        }
    }

    toggleBookForm = () => {
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    render() {
        return (
            <>
                {this.state.showForm ? <AddBookP data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> : ''}
                <div><button onClick={this.toggleBookForm}>{this.state.showForm ? 'Close form' : 'Add new book'}</button></div>
            </>
        );
    }
}

export default graphql(addBookMutation, { name: 'addBookMutation' })(AddBook);