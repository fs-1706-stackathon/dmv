/* eslint no-unused-vars:0 */
import React from 'react';
import DriverList from './DriverList';
import CarList from './CarList';
import Header from './Header';

const App = (props) => {
  return (
    <div>
      <Header />
      <div style={{display: 'flex', justifyContent: 'space-around'}} >
        <div>
          <h2>Drivers:</h2>
          <DriverList />
        </div>
        <div>
          <h2>Cars:</h2>
          <CarList />
        </div>
      </div>
    </div>
  );
};

export default App;
