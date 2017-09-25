/* eslint no-unused-vars:0 */
import React from 'react';
import { gql, graphql } from 'react-apollo';

const CarList = (props) => {
  const { cars } = props.data;
  const carsList = cars && cars.map(car => {
    return <li key={car.id}>{car.vin}: {car.make} - {car.model}</li>
  });
  return (
    <div>
      <h1>Car List:</h1>
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
`)(CarList);
