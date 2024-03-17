import React from 'react';

export default function App() {

  const orgObj = { company: 'qwe crop' };
  const carObj = { name: 'Honda' };

  // const staff = Object.assign(orgObj, carObj);
  const staff = Object.assign({}, orgObj, carObj);
  console.log('orgObj', orgObj);
  console.log('carObj', carObj);
  console.log('staff', staff);

  return (<></>);
}
