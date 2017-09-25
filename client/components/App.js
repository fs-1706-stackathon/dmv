/* eslint no-unused-vars:0 */
import React from 'react';
import DriverList from './DriverList';
// import CarList from './CarList';

const App = (props) => {
  return (
    <div style={{display: 'flex'}} >
      <h1>Drivers:</h1>
      <DriverList />
      {/* <h1>Cars:</h1>
      <CarList /> */}
    </div>
  );
};

export default App;
