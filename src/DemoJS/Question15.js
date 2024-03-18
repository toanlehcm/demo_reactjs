export default function Question15() {
  const multiArgumentFunction = (a, b, c) => a + b + c;
  console.log('multiArgumentFunction(1, 2, 3)', multiArgumentFunction(1, 2, 3));

  // Example of currying function.
  function multiply(a) {
    return function (b) {
      return a * b;
    }
  }

  // Using currying function.

  //  This creates a new function that multiplies by 2
  const multiplyBy2 = multiply(2);
  console.log(multiplyBy2);

  // Now we use the new function to multiply 5 by 2
  const result = multiplyBy2(5);
  console.log('result', result);
}

