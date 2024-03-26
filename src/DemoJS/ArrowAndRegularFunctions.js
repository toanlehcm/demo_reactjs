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
  // function Person(name) {
  //   this.name = name;
  // }

  // const john = new Person('John');
  // console.log('john.name', john.name); // Output: John

  // const greet = function () {
  //   console.log('Hello, ' + this.name);
  // };

  // const obj = {
  //   name: 'Jane'
  // };

  // // Call 'greet' as a method of 'obj'
  // obj.greet = greet;
  // console.log('obj.greet()', obj.greet()); // Output: Hello, Jane

  // // Call 'greet' as a standalone function
  // console.log('greet()', greet());
  // Output: Hello, undefined (or the value of 'name' from the global scope)

  /*---------------- Function scope. --------------------*/
  const obj = {
    name: 'John',
    regularFunc: function () {
      console.log('Regular function:', this, this.name); // 'this' refers to 'obj'
    },
    arrowFunc: () => {
      console.log('Arrow function:', this ? this.name : this); // this.name: 'this' inherits from the enclosing lexical scope (likely the global scope)
    }
  };

  function anotherFunction() {
    const innerObj = {
      name: 'Inner John',
      arrowFunc: obj.arrowFunc
    };

    innerObj.arrowFunc(); // Output: Arrow function: undefined
  }

  const anotherObj = {
    name: 'Alice',
    arrowFunc: obj.arrowFunc // undefined
  };

  const outerObj = {
    name: 'Outer John',
    innerObj: {
      name: 'Inner John',
      arrowFunc: () => {
        console.log('Arrow function of outerObj:', this ? this.name : this); // 'this' inherits from the outer lexical scope // undefined
      }
    }
  };

  obj.regularFunc(); // Output: Regular function: John
  obj.arrowFunc(); // Output: Arrow function: undefined (or the value of 'name' from the global scope)

  // If 'obj.arrowFunc()' is called within another function where 'this' is defined, it will inherit 'this' from that scope.
  anotherFunction(); // Output: Arrow function: undefined.
  console.log('anotherObj.arrowFunc()', anotherObj.arrowFunc()); // Output: Arrow function: undefine

  console.log('outerObj.innerObj.arrowFunc()', outerObj.innerObj.arrowFunc()); // Output: Arrow function: undefine
}