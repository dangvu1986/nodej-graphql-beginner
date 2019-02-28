const { GraphQLObjectType, GraphQLInt} = require('graphql');
const _ = require('lodash');

const {productType,categoryType} = require('./customType.js');
const products =  require('./data/product.json');
const categories =  require('./data/category.json');

//Define our Query endpoints
const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: productType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(products, { id: args.id });
            }
        },
        category: {
            type: categoryType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: function (source, args) {
                return _.find(categories, { id: args.id });
            }
        }
    }
});

exports.Query = Query;