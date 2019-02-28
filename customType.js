const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
} = require('graphql');
const _ = require('lodash');

const products = require('./data/product.json');

productType = new GraphQLObjectType({
    name: 'Product',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        price: { type: GraphQLFloat },
        categoryId: { type: GraphQLID }
    }
});

categoryType = new GraphQLObjectType({
    name: 'Category',
    fields: {
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        products: {
            type: new GraphQLList(productType),
            resolve(source, args) {
                return _.filter(products, {categoryId: source.id});
            }
        }
    }
});

exports.productType = productType;
exports.categoryType = categoryType;