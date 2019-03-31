import React from 'react';
import { graphql } from "react-apollo";

//Components
import Book from './Book';
import AddBook from '../book/AddBook';

//Queries
import { getBooks } from '../../queries/book.queries';

const BookFeed = props => {
    const { Books, error, loading, refetch } = props.getBooks;

    if(loading) return <p>Loading books...</p>
    if(error) return <p>Error: {error}</p>
    const books = Books.reverse().map(book => <Book key={book.id} data={book}/>);

    return (
        <>
            <AddBook refetch={refetch}/>
            <h3>Books</h3>
            <div className="book-feed">
                {props.home ? books.slice(0, 12) : books}
            </div>
        </>
    )
}

export default graphql(getBooks, { name: 'getBooks' })(BookFeed);