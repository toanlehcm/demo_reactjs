export default function DemoClosure(params) {

  /*----------- Demo 1. -----------*/
  // Closure
  // Garbage collector.
  function sum(a, b) {
    const c = a + b;
    // console.log(c);
    // return c;

    return function () {
      // c tham chiếu đến biến bên ngoài, biến này nằm trong scope của hàm chứa nó.
      // Tạo ra 1 closure, nghĩa là biến này có thể truy cập bên ngoài scope của nó.
      // Hàm con có thể truy cập và thay đổi các biến bên ngoài.
      // console.log(c);
    }
  }

  // sum(1, 2) // Vì trước đó ghi return c nên có thể ghi sum(1,2).
  // Nhưng lúc này return về 1 function nên cần thêm () vào cuối để thực thi hàm.
  sum(1, 2)();

  // Closure thường dùng trong design pattern factory method.

  /*----------- Demo 2. -----------*/
  function debug(name) {
    return function (str) {
      console.log(`${name} ${str}`);
    }
  }

  var log = debug('Hello'); // Vì debug return ve 1 hàm, nen log lúc này là 1 hàm.
  log('world'); // log nhận 'world' như parmas str.
}