export default function Question17() {
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

