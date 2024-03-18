export default function Question11() {
  // Define a function that takes another function as an argument
  function greet(name) {
    return "Hello, " + name + "!";
  }

  // Define another function that returns a function
  function createGreeter(greeting) {
    return function (name) {
      return greeting + ", " + name + "!";
    };
  }

  // Assign a function to a variable
  const sayHello = function (name) {
    return "Hello, " + name + "!";
  };

  // Pass a function as an argument to another function
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function calculate(operation, a, b) {
    return operation(a, b);
  }

  // Example usage
  console.log(greet("Alice")); // Output: Hello, Alice!
  const hiGreeter = createGreeter("Hi");
  console.log(hiGreeter("Bob")); // Output: Hi, Bob!
  console.log(sayHello("Charlie")); // Output: Hello, Charlie!
  console.log(calculate(add, 5, 3)); // Output: 8
  console.log(calculate(subtract, 10, 4)); // Output: 6

  // Assign a function to an event listener
  const handler = () => console.log("This is a click handler function");
  document.addEventListener("click", handler);

  /** 
   * In this code:
  Functions greet and createGreeter demonstrate passing functions as arguments and returning functions from functions.
  The function expression sayHello demonstrates assigning a function to a variable.
  The functions add and subtract demonstrate passing functions as arguments to another function (calculate).
  The handler function is assigned to an event listener using addEventListener, showing how functions can be assigned as event handlers.
  */
}

