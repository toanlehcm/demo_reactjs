/**
 * https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0002.Add%20Two%20Numbers/README_EN.md
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
  You may assume the two numbers do not contain any leading zero, except the number 0 itself.
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
 * */
export default function AddTwoNumbers(params) {
  function addTwoNumbers(l1, l2) {
    const result = [];
    let carry = 0;

    // Iterate through the arrays
    for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
      const sum = (l1[i] || 0) + (l2[i] || 0) + carry; // Get digits from both arrays, handle undefined with default value 0
      result.push(sum % 10); // Add the least significant digit to the result array
      carry = Math.floor(sum / 10); // Calculate carry for the next iteration
    }

    if (carry > 0) {
      result.push(carry); // If there's still a carry after the loop, add it to the result array
    }

    return result;
  }

  // Example usage
  // const l1 = [2, 4, 3];
  // const l2 = [5, 6, 4];
  const l1 = [1, 2, 3];
  const l2 = [3, 2, 2];

  console.log(addTwoNumbers(l1, l2)); // Output: [7, 0, 8]
}