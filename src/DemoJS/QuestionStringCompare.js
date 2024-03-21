export default function QuestionStringCompare() {
  /**
   * Test change of string value in JS.
   * */
  var strValue1 = "hello";
  var strValue2 = strValue1;
  console.log('----Test string-1:', strValue1, strValue2);
  strValue2 = 'hi';
  console.log('----Test string-2:', strValue1, strValue2);

  var strValue3 = 'how are you';
  var strValue4 = strValue3;
  console.log('----Test string-3:', strValue3, strValue4);
  strValue3 = 'fine'
  console.log('----Test string-4:', strValue3, strValue4);

  /**
   * 1. Equality (===): 
   * This checks if two strings are exactly equal, including their characters and case.
   * */
  var strEquality1 = "hello";
  var strEquality2 = "hello";
  var strEquality3 = strEquality2;
  console.log('-----1. Equality (===):',
    strEquality1, strEquality2, strEquality3,
    strEquality1 == strEquality2, strEquality1 === strEquality2,
    strEquality1 == strEquality3, strEquality1 === strEquality3,
    strEquality2 == strEquality3, strEquality2 === strEquality3);

  /**
   * -----2. Inequality (!==):
   * This checks if two strings are not exactly equal.
   * */
  var strInequality1 = "hello";
  var strInequality2 = "world";
  var strInequality3 = strInequality2;
  console.log('-----2. Inequality (!==):',
    strInequality1 != strInequality2, strInequality1 != strInequality3, strInequality2 != strInequality3,
    strInequality1 !== strInequality2, strInequality1 !== strInequality3, strInequality2 !== strInequality3);

  /**
   * -----3. Case sensitivity: 
   * JavaScript string comparisons are case-sensitive. Upper and lower case characters are treated as distinct.
   * */
  var stringSensitive1 = "hello";
  var stringSensitive2 = "Hello";
  var stringSensitive3 = stringSensitive2;
  console.log('-----3. Case sensitivity: ',
    stringSensitive1 == stringSensitive2, stringSensitive1 === stringSensitive2,
    stringSensitive1 == stringSensitive3, stringSensitive1 === stringSensitive3,
    stringSensitive2 == stringSensitive3, stringSensitive2 === stringSensitive3
  );

  /**
   * -----4. Lexicographical order: 
   * When using relational operators (<, <=, >, >=), strings are compared based on their Unicode values.
   * */
  console.log('-----4. Lexicographical order: ',
    "apple" < "banana",
    "apple" > "banana",
    "apple" < "apples",
  );

  /**
   * -----5. String methods for comparison: 
   * JavaScript provides string methods like localeCompare() for more advanced comparison, 
   * especially when dealing with internationalization and sorting.
   * */
  var strMethods1 = "apple";
  var strMethods2 = "banana";
  var strMethods3 = strMethods2;
  console.log('-----5. String methods for comparison:',
    strMethods1.localeCompare(strMethods2), strMethods1.localeCompare(strMethods3),
    strMethods2.localeCompare(strMethods3)); // -1 (str1 comes before str2 in dictionary order)

}
