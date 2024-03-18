export default function Question5() {
  let arrayIntegersOriginal1 = [0, 1, 2, 3, 4];
  let arrayIntegersOriginal2 = [0, 1, 2, 3, 4];
  let arrayIntegersOriginal3 = [0, 1, 2, 3, 4];

  let arrayInteger1 = arrayIntegersOriginal1.splice(0, 2);
  console.log('arrayInteger1', arrayIntegersOriginal1, arrayInteger1);

  let arrayInteger2 = arrayIntegersOriginal2.splice(3);
  console.log('arrayInteger2', arrayIntegersOriginal2, arrayInteger2);

  let arrayInteger3 = arrayIntegersOriginal3.splice(3, 1, 'a', 'b', 'c');
  console.log('arrayInteger3', arrayIntegersOriginal3, arrayInteger3);
}