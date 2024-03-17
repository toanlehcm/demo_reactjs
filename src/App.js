import React from 'react';

function App() {
  // Define a function constructor.
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Add a method to the prototype.
  Car.prototype.drive = function () {
    console.log(`Driving the ${this.make} ${this.model}`);
  };

  // Create an instance using the constructor.
  const myCar = new Car('toyota', 'corolla', 2022);

  // Call method on the instance.
  myCar.drive();

  return (<></>);
}

export default App;
