/** 2. What is a prototype chain:
 *  We define a parent constructor function Animal that takes a name parameter and sets it as a property on instances created from it.
    We add a method sayHello to the prototype of Animal.
    We define a child constructor function Dog that inherits from Animal using prototype chaining.
    We set up prototype chaining by creating a new object with Animal.prototype as its prototype and assigning it to Dog.prototype.
    We add a method bark to the prototype of Dog.
    We create instances of Dog (dog1 and dog2) and call inherited methods (sayHello) as well as methods specific to Dog (bark).
 * */
import React from 'react';

export default function Question2() {

  // Define a parent constructor function.
  function Animal(name) {
    this.name = name
  }

  // Add a method to the prototype of Animal.
  Animal.prototype.sayHello = function () {
    console.log(`hello ${this.name}`);
  };

  // Define a constructor function that inherits form Animal.
  function Dog(name, breed) {
    // Call the parent constructor function with specific context and arguments.
    Animal.call(this, name);
    this.breed = breed;
  }

  // Set up prototype chaining.
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;

  // Add a method to the prototype of Dog.
  Dog.prototype.bark = function () {
    console.log('woof....');
  }

  // Create instance of Dog.
  const dog1 = new Dog('Buddy', 'Labrador');
  const dog2 = new Dog('Max', 'Golden Retriever');

  // Access inherited method.
  dog1.sayHello();
  dog2.sayHello();

  // Call method specific to Dog.
  dog1.bark();
  dog2.bark();

  return (<></>);
}
