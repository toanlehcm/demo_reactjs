import React from 'react';

export default function App() {
  // Define a function constructor.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // Adding a method to the prototype.
  Person.prototype.sayHello = function () {
    console.log(`Name is ${this.name} and ${this.age} years old`);
  };

  // Create a new instance using Object.create and constructor's prototype.
  const newInstance = Object.create(Person.prototype);

  // Call the function with the instance and parameters.
  var result = Person.call(newInstance, 'John', 30);

  // If the result is a non-null object then use it otherwise just use the new instance.
  var finalInstance = result && typeof result === 'object' ? result : newInstance;

  console.log('newInstance', newInstance, newInstance.name, newInstance.age, newInstance.sayHello());
  console.log('result', result);
  console.log('final', finalInstance, finalInstance.name, finalInstance.age, finalInstance.sayHello());

  return (<></>);
}
