import React from 'react';

function App() {
  let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
  };

  let carProps = {
    type: {
      value: 'Volkswagen'
    },
    model: {
      value: 'Golf'
    },
    year: { value: '2024' },
  }

  var car = Object.create(vehicle, carProps);
  console.log(car);

  return (
    <div></div>
  );
}

export default App;
