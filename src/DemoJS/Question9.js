export default function Question9() {
  console.log(0 == false);    // true
  console.log(0 === false);   // false
  console.log(1 == "1");      // true
  console.log(1 === "1");     // false
  console.log(null == undefined); // true
  console.log(null === undefined); // false
  console.log('0' == false);  // true
  console.log('0' === false);  // false
  console.log(NaN == NaN, NaN === NaN);  // false

  var arr1 = [], arr2 = [];
  console.log(arr1 == arr2, arr1 === arr2);  //false, refer different objects in memory

  var obj1 = {}, obj2 = {};
  console.log(obj1 == obj2, obj1 === obj2); //false, refer different objects in memory
}