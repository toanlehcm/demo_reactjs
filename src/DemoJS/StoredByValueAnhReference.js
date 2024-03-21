import { PureComponent } from "react";

export default function StoredByValueAnhReference() {
  /**
   * Tham trị và Tham chiếu trong javascript.
   * 
   * Chia sẻ:
   * 1. Tham trị và tham chiếu là ?
   * 2. Các khám niệm:
   *    - Stored by value.
   *    - Stored by reference.
   *    - pass by value.
   *    - pass by reference.
   * 3. Cách khắc phục lỗi liên quan tới reference.
   * 4. Có liên quan gì tới ReactJS, Redux không?
   * */

  /*------------------ 1. Tham trị và tham chiếu là ? ------------------*/

  /*------------------ 2. Các khám niệm: ------------------*/
  var aTemp = { key: 'value' };
  var bTemp = aTemp;
  // console.log(aTemp, bTemp);
  aTemp = { key: 'new value' };
  // console.log(aTemp, bTemp);

  /*------ Tham trị - stored as value type. ------*/
  let aValue = 5;
  let bValue = aValue;
  // console.log('stored as value type: ', aValue, bValue);
  aValue = 10;
  // console.log('stored as value type: ', aValue, bValue);

  /*------ Tham chiếu - stored as reference type. ------*/
  var aRefer = { name: 'Hau' };
  var bRefer = aRefer;
  // console.log('stored as reference type: ', aRefer, bRefer);
  // aRefer = { name: 'Toan' };
  aRefer.name = 'Toan'; // Modify the original object
  // console.log('stored as reference type: ', aRefer, bRefer);

  /*------ Truyền tham số dạng tham trị - pass by value. ------*/
  function doMagic1(number) {
    number = 10;
  }
  const aPassByValue = 5;
  // console.log('a-1', aPassByValue);
  doMagic1(aPassByValue);
  // console.log('a-2', aPassByValue);
  /**
   * Bản chất của JS là tạo ra 1 biến const a1 = aPassByValue. Lúc này a1 và aPassByValue cùng = 5 nhưng không liên quan nhau.
   * sau đó truyền a1 vào doMagic1: doMagic1(a1), do đó cái thay đổi trong doMagic1 là a1 không phải aPassByValue. 
   * aPassByValue vẫn = 5 vì đã copy ra rồi mới xử lý. 
   * */

  /*------ Truyền tham số dạng tham chiếu - pass by reference. ------*/
  function doMagic2(obj) {
    obj.name = 'Po';
  }
  const aPassByRefer = { name: 'Hau' };
  // console.log('aPassByRefer-1', aPassByRefer);
  doMagic2(aPassByRefer);
  // console.log('aPassByRefer-2', aPassByRefer);
  /**
   * JS cũng copy const a1 = aPassByRefer. Lúc này a1 và aPassByRefer cùng trỏ đến 1 vị trí trên bộ nhớ, ví dụ 1e2f.
   * Sau đó pass a1 vào doMagic2(a1), lúc này là doMagic2(a1){a1.name='Po'}.
   * Do đó aPassByRefer cũng bị thay đổi mặc dù nằm bên ngoài hàm.
   * */

  /*------ Làm sao để không bị dính tham chiếu ------*/
  // -> Clone object.
  // -> Clone array.
  // ES6: spread operator (...)
  var aSpread = { name: 'Hau' }; // 1e2f.
  var bSpread = { ...aSpread }; // 1e2g. 
  // console.log('aSpread-1: ', aSpread, bSpread);
  aSpread.name = 'Po';
  // console.log('aSpread-2: ', aSpread, bSpread);
  /**
   * Tạo ra 1 object mới, lấy các giá trị của object a bỏ vào.
   * aSpread và bSpread không liên quan nhau.
   * */

  var arrSpread = [1, 2, 3]; // 1e2f.
  var brrSpread = [...arrSpread]; // 1e2g.
  // console.log('arrSpread-1: ', arrSpread, brrSpread);
  arrSpread.push(4);
  // console.log('arrSpread-2: ', arrSpread, brrSpread);

  /*------ Tham trị với cả tham chiếu ------*/
  // Cái này liên quan gì tới ReactJS, Redux?
  // Thỉnh thoảng component không re-render mặc dù nói là đã thay đổi giá trị props rồi.
  class AppTest extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        numberList: [],
      }
    }

    componentDidMount() {
      // const { numberList } = this.state;
      // // console.log('numberList',numberList);
      // numberList.push(1); // numberList vẫn là obj cũ.
      // // console.log('numberList*',numberList);
      // - Will it re-render?
      // - Shadow comparison: là so sánh địa chi. Khi 2 object trỏ cùng 1 vị trí bộ nhớ.
      // this.setState({ numberList:numberList }); // Gán giá trị mới nhưng lại là object cũ. Do đó địa chỉ giống nhau.
      // this.setState({ numberList }); // Không trigger
      // - State mới và state cũ có 2 object nhưng cùng địa chỉ bộ nhớ, nên React nghĩ không có thay đổi, nên không re-render.

      // --------Solution---------
      const { numberList } = this.state;
      var newNumberList = [...numberList] // Clone ra 1 object mới.
      newNumberList.push(1);
      this.setState({ numberList: newNumberList });
    }

    render() {
      // 0 or 1 -> 0. Chỉ khi clone ra object mới thì kết quả là 1.
      const { numberList } = this.state;
      return <p>{numberList}, {numberList.length}</p>
    };
  }

  /**
   * Tóm lại:
   * - Tham trị chứa giá trị (mấy kểu dự liệu đơn gián).
   * - Tham chiếu chứa địa chỉ (kiểu dự liệu phức tạp như object, array).
   * - Nhớ clone ra object mới khi thay đổi props/state trong ReactJS/Redux.
   * */

  /*------ Bài tập ------*/
  // Câu 1.
  function doSomethingCool(number, obj) {
    number = 1500;
    obj.value = 2500;
  }

  var a = 1000;
  var b = { value: 2000 };
  doSomethingCool(a, b);
  console.log('Ex1: ', 'a: ', a, 'b: ', b.value, 'a+b: ', a + b.value);
  // a: 1000 vì không liên quan đến number trong function.
  // b: 2500 vì tham chiếu đến cùng vị trí bộ nhớ với obj trong function.

  // Câu 2.
  function doSomethingGreat(obj, arr) {
    obj.value = 3500;
    arr.push(obj.value);
  }

  var aEx2 = { value: 1500 };
  var bEx2 = [1000];
  bEx2.push(aEx2.value);
  doSomethingGreat(aEx2, bEx2);
  console.log('Ex2: ', 'aEx2', aEx2, 'bEx2', bEx2);
  // aEx2: {value:3500} vì tham chiếu đến cùng vị trí bộ nhớ với obj trong function.
  // bEx2: [1000,1500,3500] vì tham chiếu đến cùng vị trí bộ nhớ với arr trong function.
}

