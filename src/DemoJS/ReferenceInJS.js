export default function ReferenceInJS() {
  /**
   * 1. Assigning Objects: 
   * When you assign an object to a variable, you're actually assigning a reference to that object. 
   * Multiple variables can refer to the same object.
   * */
  var obj1 = { name: "John" };
  var obj2 = obj1; // obj2 now refers to the same object as obj1
  console.log('------1. Assigning Objects: ', obj1, obj2);
  obj2 = { name: "Toan" };
  console.log(obj1, obj2);

  /**
   * 2. Passing Objects to Functions: 
   * When you pass an object as an argument to a function, you're passing a reference to that object. 
   * Any changes made to the object within the function will affect the original object.
   * */
  function changeName(obj) {
    obj.name = "jane";
  }

  var person = { name: 'john' };
  console.log('-----2. Passing Objects to Functions-1:', person);
  changeName(person);
  console.log(person);

  var person1 = { name: 'john' };
  var person2 = person1;
  console.log('-----2. Passing Objects to Functions-2:', person1, person2);
  changeName(person1);
  console.log(person1, person2);

  var person3 = { name: 'john' };
  var person4 = person3;
  console.log('-----2. Passing Objects to Functions-3:', person3, person4);
  person3 = { name: 'jane-2' };
  // person3.name ='jane-3'
  console.log(person3, person4);

  /**
   * 3. Comparing Objects: 
   * When you compare two objects using equality operators (== or ===), 
   * you're comparing their references, not their contents.
   * */
  var obj1 = { name: "John" };
  var obj2 = { name: "John" };
  console.log('----- 3. Comparing Objects: ', obj1 === obj2); // false (different references)

  /**
   * 4. Arrays and Functions: 
   * Arrays and functions are objects in JavaScript, so the same principles apply to them as well.
   * */
  var arr1 = [1, 2, 3];
  var arr2 = arr1; // arr2 now refers to the same array as arr1
  console.log('----- 4. Arrays and Functions-1: ', arr1, arr2);

  function myFunction(arr) {
    console.log('arr', arr);
    arr = [4, 5];
    console.log('arr*', arr);
  }
  myFunction(arr2);
  console.log(arr1, arr2, arr1 === arr2);
  // -------------

  var arr3 = [1, 2, 3];
  var arr4 = arr3; // arr4 now refers to the same array as arr3
  console.log('----- 4. Arrays and Functions-2: ', arr3, arr4, arr3 === arr4);

  function myFunction2(arr) {
    console.log('arr', arr);
    arr.splice(0, arr.length, 4, 5); // Replace the elements of arr with 4 and 5
    console.log('arr*', arr);
  }
  myFunction2(arr4);
  console.log(arr3, arr4, arr3 === arr4);
}
