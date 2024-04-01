export default function CallApplyBind() {
  // var year = 2023;

  // function getDate(month, day) {
  //   return `${this.year}-${month}-${day}`
  // }
  // const obj = { year: 2024 };

  // console.log(getDate.call(null, 3, 8));
  // console.log(getDate.call(obj, 3, 8));
  // console.log(getDate.apply(obj, [3, 8]));
  // console.log(getDate.bind(obj)(3, 8));

  /*--------- Demo. ----------*/
  const girl = {
    amount: 10,
    unit: 'USD'
  };

  function goShopping(item, quantity, price) {
    const totalCost = price * quantity;

    if (this.amount < totalCost) {
      console.log('Not enough money to buy the product');
    } else {
      console.log(`Girl went shopping and bought ${quantity} ${item} for ${totalCost} ${this.unit}`);
    }
  }

  // goShopping.call(girl, 'shoes', 2, 100);

  const boy = {
    amount: 100000,
    unit: 'USD'
  }

  // goShopping.call(boy, 'shoes', 2, 100);
  // goShopping.apply(boy, ['shoes', 2, 100]);

  // Case use bind 1:
  // const boundShopping = goShopping.bind(boy);
  // boundShopping('ip', 3, 1000);

  // Case use bind 2:
  // goShopping.bind(boy)('ip', 3, 1000);

  /*-------------- Use case 1: Passing multiple arguments, the number of arguments is unknown in advance. ------------------*/
  function log(msg) {
    console.log(msg);
  }

  // log(1);
  // log(1,2);

  function logApply() {
    console.log(console, arguments);
    console.log.apply(console, arguments);
  }

  // logApply(1);
  // logApply(1,2);

  /*-------------- Use case 2: Inheritance. ------------------*/
  function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  function Cat() {
    // super
    // Animal.call(this, 'cat', 50);
    Animal.apply(this, ['cat', '50']);

    this.say = function () {
      console.log('this', this);
      console.log(`I am ${this.name}, my weight is ${this.weight}`);
    }
  }

  const cat = new Cat();
  cat.say();
}
