import gql from "graphql-tag";

export const getReviews = gql`
    {
        Reviews{
            id
            author
            review
            createdOn
            bookId
        }
    }
`

export const getReviewsBook = gql`
    query ($bookId: ID){
        Reviews(bookId: $bookId){
            id
            author
            review
            createdOn
            bookId
        }
    }
`

export const addReviewMutation = gql`
    mutation ($author: String!, $review : String!, $bookId: ID){
        addReview(author: $author, review: $review, bookId: $bookId){
            id
            author
            review
            createdOn
            bookId
        }
    }
`