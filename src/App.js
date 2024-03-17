import React from 'react';

function App() {
  function Person() { }

  Person.prototype.name = 'John';

  var object = new Person();
  console.log('object', object);
  console.log('object.name', object.name);
  console.log('object.prototype', object.prototype);

  return (<></>);
}

export default App;
