/* eslint no-unused-vars:0 */
import React from 'react';
import { gql, graphql } from 'react-apollo';

export const DumbCarList = (props) => {
  console.log('IN THE CARS COMPONENT');
  const { cars } = props.data;
  const carsList = cars && cars.map(car => {
    return <li key={car.id}>{car.vin}: {car.make} - {car.model}</li>
  });
  return (
    <div>
      <ul>
        {carsList}
      </ul>
    </div>
  );
};

export default graphql(gql`
  query {
    cars {
      id
      make
      model
      vin
    }
  }
`)(DumbCarList);
