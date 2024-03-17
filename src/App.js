import React from 'react';

export default function App() {

  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  var object = new Person('John');
  console.log('object', object);

  return (<></>);
}
