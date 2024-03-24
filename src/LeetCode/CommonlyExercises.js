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

    // console.log('n', n);

    return n * factorial(n - 1);
  }

  var result = factorial(5);
  // console.log('result', result);

  /**
   * 4. Fibonacci Sequence:
    Generate the Fibonacci sequence up to a certain number of terms.
    https://iviettech.vn/blog/hoc_thuat_toan/10941-thuat-toan-ve-day-so-fibonacci.html
    Dãy fibonacci bắt đầu với hai phần tử f(1)=1, f(2)=1
    Số tiếp theo sẽ bằng tổng của hai số trước đó f(n) = f(n-1) + f(n-2)
   * */
  function fibonacci(n) {
    // Initialize an array to store the Fibonacci sequence, starting with the first two numbers.
    let sequence = [0, 1];

    // Iterate starting from the third number up to the nth number in the Fibonacci sequence.
    for (let i = 2; i < n; i++) {
      // Calculate the next Fibonacci number by adding the last two numbers in the sequence.
      // console.log('i', i, 'sequence', sequence, sequence[i - 1], sequence[i - 2]);
      let nextFibonacciNumber = sequence[i - 1] + sequence[i - 2];

      // Add the newly calculated Fibonacci number to the sequence array.
      sequence.push(nextFibonacciNumber);
    }

    // Return the generated Fibonacci sequence array.
    // console.log(sequence);
    // return sequence;
  }

  fibonacci(8);

  /**
   * 5. Sum of Digits:
    Calculate the sum of digits of a positive integer number.
    array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
   * */
  function sumOfDigits(n) {
    if (n === 0) return;

    // Convert the number to a string, then split it into an array of individual digits. Example: 123 => ['1', '2', '3']
    let digitsArray = n.toString().split('');
    // console.log(digitsArray);

    // Use the reduce method to iterate over each digit in the array and calculate the sum.
    // Initialize the accumulator 'acc' to 0.
    // For each digit, parse it as an integer using parseInt and add it to the accumulator.
    // The second argument of reduce (0) is the initial value of the accumulator.
    let sum = digitsArray.reduce((acc, digit) => acc + parseInt(digit), 0);

    // Return the sum of digits.
    // console.log(sum);
  }

  sumOfDigits(12345);

  /**
   * 6. Anagram Check (kiểm tra đảo chữ):
    Check if two given strings are anagrams of each other.
   * */
  function anagramCheck(str1, str2) {
    // console.log(str1, str2.split('').reverse().join(''), str1=== str2.split('').reverse().join(''));

    var str1Sort = str1.split('').sort().join('');
    var str2Sort = str2.split('').sort().join('');
    console.log(str1Sort, str2Sort, str1Sort === str2Sort);
  }
  anagramCheck('toan', 'naot');
}