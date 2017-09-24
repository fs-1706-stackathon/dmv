const { Driver, Car } = require('./connectors');

const resolvers = {
  Query: {
    drivers() {
      return Driver.findAll();
    },
    cars() {
      return Car.findAll();
    },
    car(root, args) {
      const { id, vin } = args;
      if (vin) return Car.find({ where: { vin } });
      return Car.findById(id);
    },
    driver(root, id) {
      return Driver.findById(id);
    },
  },
  Driver: {
    cars(driver) {
      return driver.getCars();
    },
  },
  Car: {
    driver(car) {
      return car.getDriver();
    },
  },
};

module.exports = resolvers;
