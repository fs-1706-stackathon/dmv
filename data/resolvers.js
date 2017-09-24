import { Driver, Car } from './connectors';

const resolvers = {
  Query: {
    drivers() {
      return Driver.findAll();
    },
    cars() {
      return Car.findAll();
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

export default resolvers;
