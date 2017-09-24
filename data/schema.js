const {
  makeExecutableSchema,
} = require('graphql-tools');
const resolvers = require('./resolvers');

// typeDefs
const typeDefs = `
type Driver {
  id: Int!
  firstName: String!
  lastName: String!
  cars: [Car]
}
type Car {
  id: Int!
  make: String!
  model: String!
  vin: String!
  driver: Driver
}
type Query {
  driver(id: Int): Driver
  cars: [Car]
  car(id: Int, vin: String): Car
  drivers: [Driver]
}
#type Mutation {
#
#}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
