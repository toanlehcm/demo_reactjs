import React from 'react';

function App() {
  // Define a constructor function.
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  // Add a method to the Person prototype.
  Person.prototype.sayHello = function () {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  }

  // Create an instance of Person.
  let john = new Person('John', 30);

  console.log(john.name);
  console.log(john.age);
  john.sayHello();

  return (
    <div></div>
  );
}

export default App;
