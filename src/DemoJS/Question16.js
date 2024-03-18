export default function Question16() {
  // Impure.
  let numberArray = [];

  const impureAddNumber = (number) => numberArray.push(number);

  // Pure.
  const pureAddNumber = (number) => (argNumberArray) => argNumberArray.concat([number]); 

  // Result.
  console.log('impureAddNumber(6)', impureAddNumber(6));
  console.log('numberArray', numberArray);
  console.log('pureAddNumber(7)(numberArray)',pureAddNumber(7)(numberArray));
  console.log('numberArray',numberArray);
}

