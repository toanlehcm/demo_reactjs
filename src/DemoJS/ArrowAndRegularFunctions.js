export default function ArrowAndRegularFunctions(params) {

  /*---------------- 'this' in arrow function. --------------------*/
  // const objArrow = {
  //   name: 'John',
  //   greet: function () {
  //     // Regular function
  //     console.log('Hello, ' + this.name);
  //   },
  //   greetArrow: () => {
  //     // Arrow function
  //     // 'this' refers to the global object, not 'objArrow'
  //     console.log('Hello, ' + this.name);
  //   }
  // };

  // Output: Hello, John
  // console.log(objArrow.greet());
  // Output: Hello, undefined (or the value of 'name' from the global scope)
  // console.log(objArrow.greetArrow());

  /*---------------- 'this' in regular function. --------------------*/
  function Person(name) {
    this.name = name;
  }

  const john = new Person('John');
  console.log('john.name', john.name); // Output: John

  const greet = function () {
    console.log('Hello, ' + this.name);
  };

  const obj = {
    name: 'Jane'
  };

  // Call 'greet' as a method of 'obj'
  obj.greet = greet;
  console.log('obj.greet()', obj.greet()); // Output: Hello, Jane

  // Call 'greet' as a standalone function
  console.log('greet()', greet());
  // Output: Hello, undefined (or the value of 'name' from the global scope)
}