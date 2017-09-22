import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';
import fetch from 'node-fetch';

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
});

const AuthorModel = db.define('author', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
});

const PostModel = db.define('post', {
  title: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING },
});

AuthorModel.hasMany(PostModel);
PostModel.belongsTo(AuthorModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return AuthorModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
    }).then((author) => {
      return author.createPost({
        title: `A post by ${author.firstName}`,
        text: casual.sentences(3),
      });
    });
  });
});


// add this somewhere in the middle
const FortuneCookie = {
  getOne() {
    return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
      .then(res => res.json())
      .then(res => {
        console.log(res[0].fortune.message);
        return res[0].fortune.message;
      });
  },
};


const Author = db.models.author;
const Post = db.models.post;

// and at the bottom, modify the export to include FortuneCookie
export { Author, Post, FortuneCookie };
