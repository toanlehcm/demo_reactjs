export default function Question13() {
  const firstOrderFunction = () => console.log('hello');

  const higherOrderFunction = (returnFirstOrderFunction) => returnFirstOrderFunction();

  higherOrderFunction(firstOrderFunction);
}

