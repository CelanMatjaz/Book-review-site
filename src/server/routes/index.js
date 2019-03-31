import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../database/schema/schema';

import Review from '../database/Models/Review';

const router = express.Router();

router.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

router.get('/revs', (req, res) => {
    Review.find({},(err, arr) => res.json(arr))
})

export default router;