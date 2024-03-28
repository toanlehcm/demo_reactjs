export default function DemoTypeOf() {
  const arr = [1, 2, 3];
  console.log('Array.isArray(arr)', Array.isArray(arr)); // Output: true

  const currentDate = new Date();
  console.log('currentDate instanceof Date', currentDate instanceof Date); // Output: true

  const arr2 = [1, 2, 3];
  console.log('Object.prototype.toString.call(arr2', Object.prototype.toString.call(arr2)); // Output: "[object Array]"

  const obj = { key: "value" };
  console.log('Object.prototype.toString.call(obj)', Object.prototype.toString.call(obj)); // Output: "[object Object]"

  const currentDate2 = new Date();
  console.log('Object.prototype.toString.call(currentDate2)', Object.prototype.toString.call(currentDate2)); // Output: "[object Date]"

}