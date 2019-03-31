import { 
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLID, 
    GraphQLString, 
    GraphQLList, 
    GraphQLInt
} from 'graphql';
import Book from '../Models/Book';
import Review from '../Models/Review';

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: { type: GraphQLString },
        reviews: {
            type: new GraphQLList(ReviewType),
            resolve: (parent) => Review.find({ bookId: parent.id })
        }
    })
});

const ReviewType = new GraphQLObjectType({
    name: 'Review',
    fields: () => ({
        id: { type: GraphQLID },
        author: { type: GraphQLString },
        review: { type: GraphQLString },
        createdOn: { type: GraphQLString },
        bookId: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, args) => {
                return Book.findById(args.id);
            }
        },
        Books: {
            type: new GraphQLList(BookType),
            args: { genre: { type: GraphQLString }, limit: { type: GraphQLInt }, offset: { type: GraphQLInt } },
            resolve: (parent, args) => {
                if(args.genre) return Book.find({ genre: args.genre });
                return Book.find({});
            }
        },
        Reviews: {
            type: new GraphQLList(ReviewType),
            args: { bookId: { type: GraphQLID } },
            resolve: (parent, args) => {
                if(args.bookId) return Review.find({ bookId: args.bookId });
                else return Review.find({});
            }
        }
    }
}); 

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addBook: {
            type: BookType,
            args: { 
                title: { type: GraphQLString },
                author: { type: GraphQLString },
                genre: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                const newBook = new Book({
                    title: args.title,
                    genre: args.genre,
                    author: args.author
                });
                return newBook.save();
            }
        },
        addReview: {
            type: ReviewType,
            args: {
                author: { type: GraphQLString },
                review: { type: GraphQLString },
                bookId: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                const newReview = new Review({
                    author: args.author || 'Anonymous',
                    review: args.review,
                    bookId: args.bookId
                });
                return newReview.save();
            }
        }
    }
});

export default new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});