import Sequelize from 'sequelize';
// import casual from 'casual';
import _ from 'lodash';
import fetch from 'node-fetch';

const db = new Sequelize('dmv', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
});

const DriverModel = db.define('driver', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
});

const CarModel = db.define('car', {
  title: { type: Sequelize.STRING },
  text: { type: Sequelize.STRING },
  regNumber: { type: Sequelize.INTEGER },
});

DriverModel.hasMany(CarModel);
CarModel.belongsTo(DriverModel);

// // create mock data with a seed, so we always get the same
// casual.seed(123);
// db.sync({ force: true }).then(() => {
//   _.times(10, () => {
//     return AuthorModel.create({
//       firstName: casual.first_name,
//       lastName: casual.last_name,
//     }).then((author) => {
//       return author.createPost({
//         title: `A post by ${author.firstName}`,
//         text: casual.sentences(3),
//       });
//     });
//   });
// });


// // add this somewhere in the middle
// const FortuneCookie = {
//   getOne() {
//     return fetch('http://fortunecookieapi.herokuapp.com/v1/cookie')
//       .then(res => res.json())
//       .then(res => {
//         console.log(res[0].fortune.message);
//         return res[0].fortune.message;
//       });
//   },
// };


const Driver = db.models.driver;
const Car = db.models.car;

// and at the bottom, modify the export to include FortuneCookie
export { Driver, Car };
