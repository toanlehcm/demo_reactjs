export default function CommonlyExercises() {
  /**
   * 1. Reverse a String:
      Write a function to reverse a string in-place.
   * */
  function reverseString(str) {
    // console.log(str.split('').reverse().join(''), str);
  };

  reverseString('toan');

  /**
   * 2. Palindrome Check (check đối xứng):
      Determine if a given string is a palindrome.
   * */
  function isPalindrome(str) {
    // console.log(str, str.split('').reverse().join(''), str === str.split('').reverse().join(''));
  }

  isPalindrome('12321');

  /**
   * 3. Factorial (giai thừa):
    Calculate the factorial of a given number.
    https://howkteam.vn/course/bai-toan-kinh-dien-trong-lap-trinh/tim-giai-thua-cua-mot-so-find-factorial-of-number-1294
   * */
  function factorial(n) {
    if (n === 0) return 1;

    console.log('n', n);

    return n * factorial(n - 1);
  }

  var result = factorial(5);
  console.log('result', result);
}