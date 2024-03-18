export default function Question5() {
  let arrayInteger = [1, 2, 3, 4, 5];
  let arrayInteger1 = arrayInteger.slice(0, 2);
  let arrayInteger2 = arrayInteger.slice(2, 3);
  let arrayInteger3 = arrayInteger.slice(4);
  let arrayInteger4 = arrayInteger.slice(2);

  console.log('arrayInteger', arrayInteger);
  console.log('arrayInteger1', arrayInteger1);
  console.log('arrayInteger2', arrayInteger2);
  console.log('arrayInteger3', arrayInteger3);
  console.log('arrayInteger4', arrayInteger4);
}