// https://www.w3schools.com/react/react_es6_spread.asp

export default function QuestionSpread() {
  // var arr1 = [...'toan'];
  // console.log(arr1);
  // return(<div>{arr1}</div>)
  // -----
  // var number = [1, 2, 3, 4, 5, 6];
  // const [one, two, ...rest] = number;
  // console.log("one", one);
  // console.log("two", two);
  // console.log("rest", rest);
  // return (
  //   <>
  //     <div>one: {one}</div>
  //     <div>two: {two}</div>
  //     <div>rest: {rest}</div>
  //   </>
  // );
  // ------
  const myVehicle = {
    brand: "ford",
    model: "mustang",
    color: "red",
  };

  const updateMyVehicle = {
    type: "car",
    year: "2024",
    color: "green",
  };

  const myNewVehicle = { ...myVehicle, ...updateMyVehicle };

  console.log("myVehicle", myVehicle);
  console.log("updateMyVehicle", updateMyVehicle);
  console.log("myNewVehicle", myNewVehicle);
}
