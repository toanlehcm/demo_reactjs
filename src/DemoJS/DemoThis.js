export default function DemoThis() {
  var number = 100;

  // function testFunc(number) {
  //   this.number = number;   // this.x = Window.x = 10
  //   console.log(this.number);    // 10 (Window.x)

  //   var innerFunc = function () {
  //     console.log(this.number);    // 10 (Window.x)
  //   }

  //   innerFunc();

  //   setTimeout(function () {      // anonymous function (no name)
  //     console.log(this.number);   // 10 (Window.x)
  //   }, 1000);
  // }

  // testFunc(10);
  // console.log(number);   // 10 (Window.x)

}