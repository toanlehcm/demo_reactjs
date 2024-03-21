export default function QuestionArrayCompare() {
  var arrTest = [1, 2, 3];
  console.log('arrTest org: ', arrTest);

  arrTest = [4, 5, 6];
  console.log('arrTest update 1:', arrTest);

  arrTest = [7];
  console.log('arrTest update 2:', arrTest);

  /**
   * 1. Arrays with the same values: 
   * Two arrays with identical elements in the same order are considered equal.
   * */
  var arrSame1 = [1, 2, 3];
  var arrSame2 = [1, 2, 3];
  var arrSame3 = arrSame2;
  console.log('---- Test reference-1: ', arrSame2, arrSame3);
  arrSame3 = [1, 2];
  console.log('---- Test reference-2: ', arrSame2, arrSame3);

  console.log('------ 1. Arrays with the same values: ',
    arrSame1 == arrSame2, arrSame1 === arrSame2,
    arrSame1 == arrSame3, arrSame1 === arrSame3,
    arrSame2 == arrSame3, arrSame2 === arrSame3
  );
  console.log('arrSame1', arrSame1,
    JSON.stringify(arrSame1), JSON.stringify(arrSame2),
    JSON.stringify(arrSame1) == JSON.stringify(arrSame2),
    JSON.stringify(arrSame1) === JSON.stringify(arrSame2));

  /**
   * 2. Arrays with different values: 
   * even if the elements are the same, are considered not equal.
   * */
  var arrDifferent1 = [1, 2, 3];
  var arrDifferent2 = [3, 2, 1];
  var arrDifferent3 = arrDifferent2;
  console.log('------ 2. Arrays with different values: ',
    arrDifferent1 == arrDifferent2, arrDifferent1 === arrDifferent2,
    arrDifferent1 == arrDifferent3, arrDifferent1 === arrDifferent3,
    arrDifferent2 == arrDifferent3, arrDifferent2 === arrDifferent3
  );
  console.log(JSON.stringify(arrDifferent1), JSON.stringify(arrDifferent2),
    JSON.stringify(arrDifferent1) == JSON.stringify(arrDifferent2),
    JSON.stringify(arrDifferent1) === JSON.stringify(arrDifferent2));

  /**
   * 3. Arrays with different lengths: 
   * Arrays with different lengths are considered not equal.
   * */
  var arrLength1 = [1, 2, 3];
  var arrLength2 = [1, 2, 3, 4];
  var arrLength3 = arrLength2;
  console.log('------ 3. Arrays with different lengths: ',
    arrLength1 == arrLength2, arrLength1 === arrLength2,
    arrLength1 == arrLength3, arrLength1 === arrLength3,
    arrLength2 == arrLength3, arrLength2 === arrLength3
  );
  console.log(JSON.stringify(arrLength1), JSON.stringify(arrLength2),
    JSON.stringify(arrLength1) == JSON.stringify(arrLength2),
    JSON.stringify(arrLength1) === JSON.stringify(arrLength2));

  /**
   * 4. Arrays with nested arrays: 
   * Arrays with nested arrays are compared by reference.
   * */
  var nestedArr1 = [[1, 2], [3, 4]];
  var nestedArr2 = [[1, 2], [3, 4]];
  var nestedArr3 = nestedArr2;
  console.log('------ 4. Arrays with nested arrays: ',
    nestedArr1 == nestedArr2, nestedArr1 === nestedArr2,
    nestedArr1 == nestedArr3, nestedArr1 === nestedArr3,
    nestedArr2 == nestedArr3, nestedArr2 === nestedArr3
  );
  console.log(JSON.stringify(nestedArr1), JSON.stringify(nestedArr2),
    JSON.stringify(nestedArr1) == JSON.stringify(nestedArr2),
    JSON.stringify(nestedArr1) === JSON.stringify(nestedArr2));

  /**
   * 5. Arrays with null values: 
   * Arrays with null values are compared by reference.
   * */
  var arrNull1 = [null, null, null];
  var arrNull2 = [null, null, null];
  var arrNull3 = arrNull2;
  var arrNull4 = [null, null, null, null];
  console.log('------ 5. Arrays with null values: ',
    arrNull1 == arrNull2, arrNull1 === arrNull2,
    arrNull1 == arrNull3, arrNull1 === arrNull3,
    arrNull2 == arrNull3, arrNull2 === arrNull3
  );
  console.log('arrNull1', arrNull1, JSON.stringify(arrNull1), JSON.stringify(arrNull2), JSON.stringify(arrNull4),
    JSON.stringify(arrNull1) == JSON.stringify(arrNull2),
    JSON.stringify(arrNull1) === JSON.stringify(arrNull2),
    JSON.stringify(arrNull1) == JSON.stringify(arrNull4),
    JSON.stringify(arrNull1) === JSON.stringify(arrNull4));

  /**
   * 6. Arrays with undefined values: 
   * Arrays with undefined values are compared by reference.
   * */
  var arrUndefined1 = [undefined, undefined];
  var arrUndefined2 = [undefined, undefined]; // , undefined
  var arrUndefined3 = arrUndefined2;
  var arrUndefined4 = [undefined, undefined, undefined];
  console.log('------ 6. Arrays with undefined values: ',
    arrUndefined1 == arrUndefined2, arrUndefined1 === arrUndefined2,
    arrUndefined1 == arrUndefined3, arrUndefined1 === arrUndefined3,
    arrUndefined2 == arrUndefined3, arrUndefined2 === arrUndefined3
  );
  console.log('arrUndefined1', arrUndefined1,
    JSON.stringify(arrUndefined1), JSON.stringify(arrUndefined2), JSON.stringify(arrUndefined4),
    JSON.stringify(arrUndefined1) == JSON.stringify(arrUndefined2),
    JSON.stringify(arrUndefined1) === JSON.stringify(arrUndefined2),
    JSON.stringify(arrUndefined1) == JSON.stringify(arrUndefined4),
    JSON.stringify(arrUndefined1) === JSON.stringify(arrUndefined4));

  /**
   * 7. Arrays with different orders: 
   * Arrays with the same elements but in a different order are considered not equal.
   * */
  var arrOrder1 = [1, 2, 3];
  var arrOrder2 = [3, 2, 1];
  var arrOrder3 = arrOrder2;
  var arrOrder4 = [3, 2, 1, 0];
  console.log('------ 7. Arrays with different orders: ',
    arrOrder1 == arrOrder2, arrOrder1 === arrOrder2,
    arrOrder1 == arrOrder3, arrOrder1 === arrOrder3,
    arrOrder2 == arrOrder3, arrOrder2 === arrOrder3
  );
  console.log('arrOrder1', arrOrder1,
    JSON.stringify(arrOrder1), JSON.stringify(arrOrder2), JSON.stringify(arrOrder4),
    JSON.stringify(arrOrder1) == JSON.stringify(arrOrder2),
    JSON.stringify(arrOrder1) === JSON.stringify(arrOrder2),
    JSON.stringify(arrOrder1) == JSON.stringify(arrOrder4),
    JSON.stringify(arrOrder1) === JSON.stringify(arrOrder4));

  /**
   * 8. Arrays with objects: 
   * Arrays with objects are compared by reference.
   * */
  var obj1 = { key: 'value' };
  var obj2 = { key: 'value' };
  var obj4 = { key: 'value4' };
  var arrObj1 = [obj1];
  var arrObj2 = [obj2];
  var arrObj3 = arrObj2;
  var arrObj4 = [obj4];
  console.log('------ 8. Arrays with object: ',
    arrObj1 == arrObj2, arrObj1 === arrObj2,
    arrObj1 == arrObj3, arrObj1 === arrObj3,
    arrObj2 == arrObj3, arrObj2 === arrObj3
  );
  console.log('arrObj1', arrObj1, arrObj4,
    JSON.stringify(arrObj1), JSON.stringify(arrObj2), JSON.stringify(arrObj4),
    JSON.stringify(arrObj1) == JSON.stringify(arrObj2),
    JSON.stringify(arrObj1) === JSON.stringify(arrObj2),
    JSON.stringify(arrObj1) == JSON.stringify(arrObj4),
    JSON.stringify(arrObj1) === JSON.stringify(arrObj4));
}
