export default function CompareNullAndUndeFined() {
  console.log('null === undefined', null === undefined); // false
  console.log('null == undefined', null == undefined); // true

  console.log('null === null', null === null); // true
  console.log('null == null', null == null); // true

  console.log('undefined === undefined', undefined === undefined); // true
  console.log('undefined == undefined', undefined == undefined); // true

  // null and undefined are not equal to any other value 
  // when using the === or == operator.
  console.log('0 === null', 0 === null); // false
  console.log('0 == null', 0 == null); // false

  console.log('0 === undefined', 0 === undefined); // false
  console.log('0 == undefined', 0 == undefined); // false
}
