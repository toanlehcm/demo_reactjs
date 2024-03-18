export default function Question17() {
  // Using let
  function example() {
    let x = 10;
    if (true) {
      let y = 20; // y is only accessible within this block
      console.log(x); // Output: 10
      console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    // console.log(y); // Error: y is not defined
  }

  // Using var
  function example() {
    var x = 10;
    if (true) {
      var y = 20; // y is accessible outside of the block
      console.log(x); // Output: 10
      console.log(y); // Output: 20
    }
    console.log(x); // Output: 10
    console.log(y); // Output: 20
  }

  // Block scope with let
  for (let i = 0; i < 3; i++) {
    console.log('let', i);

    setTimeout(function () {
      console.log('let*', i); // Output: 0, 1, 2 (due to block scope)
    }, 1000);
  }

  // Function scope with var
  for (var i = 0; i < 3; i++) {
    console.log('var', i);

    setTimeout(function () {
      console.log('var*', i); // Output: 3, 3, 3 (due to function scope)
    }, 1000);
  }
}

