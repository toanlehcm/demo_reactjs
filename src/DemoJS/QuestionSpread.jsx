// https://www.w3schools.com/react/react_es6_spread.asp

export default function QuestionSpread() {
  var arr1 = [..."toan"];
  // console.log(arr1);
  // return (
  //   <>
  //     <div>
  //       arr1:
  //       <span> {arr1}</span>
  //     </div>
  //     <div>
  //       arr1-2:
  //       {arr1.map((item, idex) => (
  //         <span key={idex}> {item}, </span>
  //       ))}
  //     </div>
  //   </>
  // );

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

  /*-----Copy array------*/
  // var orgArr = [1, 2, 3];
  // var copyArr1 = [orgArr];
  // var copyArr2 = [...orgArr];
  // console.log('copyArr1', copyArr1);
  // console.log('copyArr2', copyArr2);

  /*-----Concatenating array similar to object------*/
  // var arr1 = [1, 2, 3];
  // var arr2 = [4, 5, 6];
  // var concat1 = [arr1, arr2];
  // var concat2 = [arr1, ...arr2];
  // var concat3 = [...arr1, arr2];
  // var concat4 = [...arr1, ...arr2];
  // console.log("concat1", concat1);
  // console.log("concat2", concat2);
  // console.log("concat3", concat3);
  // console.log("concat4", concat4);

  /*-----Passing elements of an array as arguments to a function ------*/
  // var number = [1, 2, 3];
  // var sum = (a, b, c) => a + b + c;
  // var result1 = sum(number);
  // var result2 = sum(...number);
  // console.log("result1: ", result1);
  // console.log("result2: ", result2);

  /*------- Merge object ------*/
  // var obj1 = { a: 1, b: 2 };
  // var obj2 = { c: 3, d: 4 };
  // var objMerged1 = { obj1, obj2 };
  // var objMerged2 = { ...obj1, obj2 };
  // var objMerged3 = { obj1, ...obj2 };
  // var objMerged4 = { ...obj1, ...obj2 };
  // console.log("objMerged1", objMerged1);
  // console.log("objMerged2", objMerged2);
  // console.log("objMerged3", objMerged3);
  // console.log("objMerged4", objMerged4);

  /*------- Copy object ------*/
  // const myVehicle = {
  //   brand: "ford",
  //   model: "mustang",
  //   color: "red",
  // };

  // const updateMyVehicle = {
  //   type: "car",
  //   year: "2024",
  //   color: "green",
  // };

  // const myNewVehicle1 = { myVehicle, updateMyVehicle };
  // const myNewVehicle2 = { ...myVehicle, updateMyVehicle };
  // const myNewVehicle3 = { myVehicle, ...updateMyVehicle };
  // const myNewVehicle4 = { ...myVehicle, ...updateMyVehicle };

  // console.log("myVehicle", myVehicle);
  // console.log("updateMyVehicle", updateMyVehicle);
  // console.log("myNewVehicle1", myNewVehicle1);
  // console.log("myNewVehicle2", myNewVehicle2);
  // console.log("myNewVehicle3", myNewVehicle3);
  // console.log("myNewVehicle4", myNewVehicle4);

  /*---------------------*/
  // var objOrg = { x: 1, y: 2 };
  // var objCopy1 = { objOrg };
  // var objCopy2 = { ...objOrg };
  // console.log("objCopy1", objCopy1);
  // console.log("objCopy2", objCopy2);

  /*------- Add new properties to an object ------*/
  // var objNew1 = { objOrg, z: 3 };
  // var objNew2 = { ...objOrg, z: 3 };
  // console.log("objNew1", objNew1);
  // console.log("objNew2", objNew2);

  /*------- Cloning objects with nested properties ------*/
  // var objNestOrg = { x: 1, nested: { y: 2 } };
  // var objClone1 = { objNestOrg, nested: { ...objNestOrg.nested } };
  // var objClone2 = { ...objNestOrg, nested: { ...objNestOrg.nested } };
  // console.log("objClone1", objClone1);

  /*-------  ------*/
  var arr1 = ["string", "string", 1, 2, 3];
  var arr2 = [..."string", "string", 1, 2, 3];
  var arr3 = ["string", ..."string", 1, 2, 3];
  var arr4 = [..."string", ..."string", 1, 2, 3];
  var arr5 = ["string string", 1, 2, 3];
  var arr6 = [..."string string", 1, 2, 3];

  console.log("arr1", arr1);
  console.log("arr2", arr2);
  console.log("arr3", arr3);
  console.log("arr4", arr4);
  console.log("arr5", arr5);
  console.log("arr6", arr6);
  return (
    <>
      <div> arr1: {arr1}</div>
      <div> arr2: {arr2}</div>
      <div> arr3: {arr3}</div>
      <div> arr4: {arr4}</div>
      <div> arr5: {arr5}</div>
      <div> arr6: {arr6}</div>

      <hr />

      <div>
        arr1:{" "}
        {arr1.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>

      <div>
        arr2:{" "}
        {arr2.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>

      <div>
        arr3:{" "}
        {arr3.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>

      <div>
        arr4:{" "}
        {arr4.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>

      <div>
        arr5:{" "}
        {arr5.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>

      <div>
        arr6:{" "}
        {arr6.map((item, index) => (
          <span key={index}>{item}, </span>
        ))}
      </div>
    </>
  );
}
