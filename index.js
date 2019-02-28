const express = require('express');

const {GraphQLSchema} = require('graphql');
const graphqlHTTP = require('express-graphql');
const {Query} = require('./query.js');

//setup graphql with express
const app = express();
const schema = new GraphQLSchema({query: Query});
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const port = 3000;
app.listen(port);
console.log(`Server running at port ${port}`);