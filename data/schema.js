import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolvers';

// typeDefs
const typeDefs = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
type FortuneCookie {
  message: String
}
type Query {
  author(firstName: String, lastName: String): Author
  fortune: FortuneCookie
  posts: [Post]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
