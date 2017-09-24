const Sequelize = require('sequelize');
const casual = require('casual');
const _ = require('lodash');
const { generateMakeModel, generateVin } = require('./fake-data');

const db = new Sequelize('dmv', null, null, {
  dialect: 'sqlite',
  storage: './dmv.sqlite',
});

const DriverModel = db.define('driver', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
});

const CarModel = db.define('car', {
  make: { type: Sequelize.STRING },
  model: { type: Sequelize.STRING },
  vin: { type: Sequelize.STRING },
});

DriverModel.hasMany(CarModel);
CarModel.belongsTo(DriverModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return DriverModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
    }).then((driver) => {
      const makeModels = generateMakeModel();
      const make = makeModels[0];
      const model = makeModels[1];
      return driver.createCar({
        make,
        model,
        vin: generateVin(),
      });
    });
  });
});

const Driver = db.models.driver;
const Car = db.models.car;

// and at the bottom, modify the export to include FortuneCookie
module.exports = { Driver, Car };
