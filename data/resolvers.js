import { Author, Post, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.find({ where: args });
    },
    fortune() {
      return {
        message: FortuneCookie.getOne(),
      };
    },
    posts() {
      return Post.findAll();
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
};

export default resolvers;
