export default function DemoPromise(params) {
  const myPromise1 = new Promise((resolve, reject) => {
    console.log('myPromise1', resolve);
    setTimeout(resolve, 200, "King");
  });

  // Create another Promise
  const myPromise2 = new Promise((resolve, reject) => {
    console.log('myPromise2', resolve);
    setTimeout(resolve, 100, "Queen");
  });

  // Run when All promises are settled
  Promise.allSettled([myPromise1, myPromise2]).then((results) => {
    console.log('results', results);

    results.forEach((x) => {
      console.log('x', x, x.status);
      myDisplay(x.status)
    });
  });

  Promise.all([myPromise1, myPromise2]).then((results) => {
    console.log('results', results);

    results.forEach((x) => {
      console.log('x', x, x.status);
      myDisplay(x.status)
    });
  });

  // Funtion to run when a Promise is settled:
  function myDisplay(some) {
    console.log('some', some);
  }
}