// https://www.w3schools.com/react/react_es6_spread.asp

export default function QuestionSpread() {
  var arr1 = [..."toan"];
  console.log(arr1);
  return (
    <>
      <div>
        arr1:
        <span> {arr1}</span>
      </div>
      <div>
        arr1-2:
        {arr1.map((item, idex) => (
          <span key={idex}> {item}, </span>
        ))}
      </div>
    </>
  );

  // ------destructure------
  // var number = [1, 2, 3, 4, 5, 6];
  // const [one, two, ...rest] = number;
  // console.log("number", number);
  // console.log("one", one);
  // console.log("two", two);
  // console.log("rest", rest);
  // return (
  //   <>
  //     <div>number: {number}</div>
  //     <div>one: {one}</div>
  //     <div>two: {two}</div>
  //     <div>rest: {rest}</div>
  //     <hr />
  //     <div>
  //       number:
  //       {number.map((item, idx) => {
  //         return <span key={idx}> {item}, </span>;
  //       })}
  //     </div>
  //     <div>
  //       rest:
  //       {rest.map((item, idx) => {
  //         return <span key={idx}> {item}, </span>;
  //       })}
  //     </div>
  //   </>
  // );

  // --------------------
  // console.log("arr1", arr1);
  // console.log("arr2", arr2);
  // console.log("arr3", arr3);
  // console.log("arr4", arr4);
  // console.log("arr5", arr5);
  // console.log("arr6", arr6);
  // return (
  //   <>
  //     <div> arr1: {arr1}</div>
  //     <div> arr2: {arr2}</div>
  //     <div> arr3: {arr3}</div>
  //     <div> arr4: {arr4}</div>
  //     <div> arr5: {arr5}</div>
  //     <div> arr6: {arr6}</div>

  //     <hr />

  //     <div>
  //       arr1:{" "}
  //       {arr1.map((item, index) => (
  //         <span key={index}>{item}, </span>
  //       ))}
  //     </div>

  //     <div>
  //       arr2:{" "}
  //       {arr2.map((item, index) => (
  //         <span key={index}>{item}, </span>
  //       ))}
  //     </div>

  //     <div>
  //       arr3:{" "}
  //       {arr3.map((item, index) => (
  //         <span key={index}>{item}, </span>
  //       ))}
  //     </div>

  //     <div>
  //       arr4:{" "}
  //       {arr4.map((item, index) => (
  //         <span key={index}>{item}, </span>
  //       ))}
  //     </div>

  //     <div>
  //       arr5:{" "}
  //       {arr5.map((item, index) => (
  //         <span key={index}>{item}, </span>
  //       ))}
  //     </div>

  //     <div>
  //       arr6:{" "}
  //       {arr6.map((item, index) => (
  //         <span key={index}>{item}, </span>
  //       ))}
  //     </div>
  //   </>
  // );
}
