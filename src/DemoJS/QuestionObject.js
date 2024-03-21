export default function QuestionObject() {
  // 
  var objTest = { key: 'value' };
  console.log('objTest: ', objTest);

  objTest = { key: 'value 2' }
  console.log('objTest 2: ', objTest);


  /**
   * 1. Objects with the same value: 
   * When you create two separate objects with identical key-value pairs, 
   * they will not be considered equal because each object is stored in a different location in memory. 
   * JavaScript compares objects by reference, not by their contents.
   */
  const obj1 = { key: 'value' };
  const obj2 = { key: 'value' };
  const obj3 = obj2;
  console.log('Objects with the same value: ', obj1 == obj2, obj1 === obj2, obj1 == obj3, obj1 === obj3, obj2 == obj3, obj2 === obj3);

  /**
   * 2. Objects with different values: 
   * Similarly, if you create two objects with different values for their properties, they will also not be considered equal. 
   * Again, JavaScript compares objects by reference, so even if the values are different but the structures are the same, the objects will not be equal.
   * */
  var obj4 = { key: "value4" }
  var obj5 = { key: "value5" }
  var obj6 = obj5;
  console.log('Objects with the different value: ', obj4 == obj5, obj4 === obj5, obj4 == obj6, obj4 === obj6, obj5 == obj6, obj5 === obj6);

  /**
   * 3. Objects with nested objects: 
   * If you have objects containing nested objects, their equality is still determined by reference. 
   * Even if the nested objects have identical key-value pairs, they are considered different if they are stored in separate memory locations.
   * */
  var objNested1 = { nested: { key: 'value' } };
  var objNested2 = { nested: { key: 'value' } };
  var objNested3 = objNested2;
  console.log('Objects with the nested object: ', objNested1, objNested1 == objNested2, objNested1 === objNested2, objNested1 == objNested3, objNested1 === objNested3,
    objNested2 == objNested3, objNested2 === objNested3);

  /**
   * 4. Objects with arrays: 
   * Arrays are treated similarly to nested objects. 
   * If you have objects containing arrays, their equality is determined by reference. 
   * Even if the arrays have the same elements, they are considered different if they are stored in separate memory locations.
   * */
  var objWithArr1 = { arr: [1, 2, 3] };
  var objWithArr1 = { arr: [4, 5, 6] };
  var objWithArr1 = { arr: [7, 8, 9] };
  console.log('objWithArr1', objWithArr1);

  var objWithArr2 = { arr: [1, 2, 3] };
  var objWithArr2 = { arr: [4, 5] };
  var objWithArr2 = { arr: [6] };
  console.log('objWithArr2', objWithArr2);

  var objWithArr3 = { arr: [7, 8, 9] };
  var objWithArr4 = objWithArr3;
  console.log('Objects with arrays: ', objWithArr1, objWithArr1 == objWithArr3, objWithArr1 === objWithArr3, objWithArr1 == objWithArr4, objWithArr1 === objWithArr4,
    objWithArr3 == objWithArr4, objWithArr3 === objWithArr4);

  /**
   * 5. Objects with different order of properties: 
   * The order of properties in an object does not affect its equality. 
   * JavaScript considers two objects with the same properties but in a different order as equal. 
   * However, if the properties themselves are different, the objects are not equal.
   * */
  var objOrder1 = { a: 1, b: 2 };
  var objOrder2 = { b: 2, a: 1 };
  var objOrder3 = objOrder2;
  console.log('Objects with different order of properties: ', objOrder1, objOrder1 == objOrder2, objOrder1 === objOrder2, objOrder1 == objOrder3, objOrder1 === objOrder3,
    objOrder2 == objOrder3, objOrder2 === objOrder3);

  /**
   * 6. Objects with different number of properties: 
   * Similarly, the number of properties in an object does not affect its equality. 
   * JavaScript considers two objects with different numbers of properties as not equal, even if the properties they share have the same values.
   * */
  var objNumberOf1 = { a: 1, b: 2 };
  var objNumberOf2 = { a: 1 };
  var objNumberOf3 = objNumberOf2;
  console.log('Objects with different number of properties: ', objNumberOf1, objNumberOf1 == objNumberOf2, objNumberOf1 === objNumberOf2, objNumberOf1 == objNumberOf3, objNumberOf1 === objNumberOf3,
    objNumberOf2 == objNumberOf3, objNumberOf2 === objNumberOf3);

  /**
   * 7. Objects with null value: 
   * Objects with properties set to null are still compared by reference. 
   * Two objects with properties set to null will not be considered equal unless they reference the same object in memory.
   * */
  var objNull1 = { key: null };
  var objNull2 = { key: null };
  var objNull3 = objNull2;
  var objNull4 = { key: undefined };
  console.log('Objects with null value: ', objNull1, objNull1 == objNull2, objNull1 === objNull2, objNull1 == objNull3, objNull1 === objNull3, objNull2 == objNull3, objNull2 === objNull3);
  console.log('Objects with null value: ', objNull4, objNull1 == objNull4, objNull1 === objNull4);

  /**
   * 8. Objects with undefined value: 
   * Objects with properties set to undefined are also compared by reference. 
   * Two objects with properties set to undefined will not be considered equal unless they reference the same object in memory.
   * */
  var objUndefine1 = { key: undefined };
  var objUndefine2 = { key: undefined };
  var objUndefine3 = objUndefine2;
  console.log('Objects with undefine value: ', objUndefine1, objUndefine1 == objUndefine2, objUndefine1 === objUndefine2, objUndefine1 == objUndefine3, objUndefine1 === objUndefine3,
    objUndefine2 == objUndefine3, objUndefine2 === objUndefine3);

  /**
   * 9. Objects with the same reference: 
   * If you assign an object to another variable, both variables will reference the same object in memory. 
   * In this case, both variables will be equal because they point to the same object in memory.
   * */
  const obj17 = { key: 'value' };
  const obj18 = obj17;
  console.log('Objects with the same reference: ', obj17 == obj18, obj17 === obj18); // true
}
