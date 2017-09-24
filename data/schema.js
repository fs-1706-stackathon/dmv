import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolvers';

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
  title: String!
  regNumber: Int!
  driver: Driver
}
type Query {
  drivers(firstName: String, lastName: String): Driver
  cars: [Car]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
