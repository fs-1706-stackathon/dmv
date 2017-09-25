/* eslint no-unused-vars:0 */
import React from 'react';
import { gql, graphql } from 'react-apollo';
import CarList from './CarList';

const DriverList = (props) => {
  const { drivers } = props.data;
  const driversList = drivers && drivers.map(driver => {
    console.log('driver: ', driver);
    return (
      <li key={driver.id}>{driver.firstName} {driver.lastName}</li>
    );
  });
  return (
    <div>
      <ul>
        {driversList}
      </ul>
    </div>
  );
};

export default graphql(gql`
  query {
    drivers {
      id
      firstName
      lastName
      cars {
        id
        make
        model
        vin
      }
    }
  }
`)(DriverList);
