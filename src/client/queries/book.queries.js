import gql from "graphql-tag";

export const getBooks = gql`
    {
        Books{
            id
            title
            genre
            author
        }
    }
`

export const getBook = gql`
    query($bookId: ID!){
        Book(id: $bookId){
            id
            title
            genre
            author
            reviews{
                id
                author
                review
                createdOn
            }
        }
    }
`

export const addBookMutation = gql`
    mutation($title: String!, $author: String!, $genre: String!){
        addBook(title: $title, author: $author, genre: $genre){
            title
            genre
            author
            id
        }
    }
`