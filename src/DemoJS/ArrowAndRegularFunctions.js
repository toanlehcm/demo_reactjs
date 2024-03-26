export default function ArrowAndRegularFunctions(params) {
  const obj = {
    name: 'John',
    greet: function () {
      // Regular function
      console.log('Hello, ' + this.name);
    },
    greetArrow: () => {
      // Arrow function
      // 'this' refers to the global object, not 'obj'
      console.log('Hello, ' + this.name);
    }
  };

  // Output: Hello, John
  console.log(obj.greet());
  // Output: Hello, undefined (or the value of 'name' from the global scope)
  console.log(obj.greetArrow());

}