/** 
 * https://github.com/doocs/leetcode/blob/main/solution/0000-0099/0080.Remove%20Duplicates%20from%20Sorted%20Array%20II/README_EN.md
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
  Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
  Return k after placing the final result in the first k slots of nums.
  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
  Custom Judge:
  The judge will test your solution with the following code:
  int[] nums = [...]; // Input array
  int[] expectedNums = [...]; // The expected answer with correct length
  int k = removeDuplicates(nums); // Calls your implementation
  assert k == expectedNums.length;
  for (int i = 0; i < k; i++) {
      assert nums[i] == expectedNums[i];
  }
  If all assertions pass, then your solution will be accepted.
  Example 1:
  Input: nums = [1,1,1,2,2,3]
  Output: 5, nums = [1,1,2,2,3,_]
  Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
  It does not matter what you leave beyond the returned k (hence they are underscores).
 * */
export default function RemoveDuplicatesFromSortedArrayII() {
  function removeDuplicates(nums) {
    var index = 0 // Index to keep track of the last valid position in the modified  array.
    var count = 1; // Count to track occurrences of each element, initialized to 1 for the first occurrence.

    for (let i = 0; i < nums.length; i++) {
      console.log('count', count, 'nums:', nums, 'i', i, 'nums[i]', nums[i], 'index', index, 'nums[index]', nums[index]);

      // Compare current elemtn with element at the current valid position.
      if (nums[i] === nums[index]) { // If current element is equal to element at index.
        count++; // Increment count for this element.
        console.log('count*', count);
      } else { // If current element is difference from element at index.
        count = 1; // Reset count for new element.
      }

      // If count for current element is less than or equal to 2.
      if (count <= 2) {
        index++; // Increment index to move to next valid position.
        nums[index] = nums[i]; // Copy current element to next valid position in modified array.
      }

      console.log('nums', nums, 'index*', index, 'nums[index]*', nums[index]);
    }

    // Truncate the modified array to remove excess elements.
    console.log('nums**', nums, 'nums.length', nums.length);
    nums.length = index + 1;
    console.log('nums***', nums, 'nums.length*', nums.length);

    // Return the modified array.
    // return nums;
    console.log('result: ', nums);
  }

  // removeDuplicates([1, 1, 1, 2, 2, 3]);
  removeDuplicates([0, 0, 0, 1, 2, 3, 4, 4, 4, 5, 6,]);
}

/**
 * Explanation of each part:

  - export default function RemoveDuplicatesFromSortedArrayII() { ... }: This declares a default exported function named RemoveDuplicatesFromSortedArrayII. It's not directly relevant to the algorithm, but it wraps the removeDuplicates function.

  - function removeDuplicates(nums) { ... }: This is the main function to remove duplicates from the sorted array. It takes an array nums as input.

  - var index = 0; var count = 1;: These variables are initialized to keep track of the last valid position in the modified array (index) and the count of occurrences of each element (count).

  - for (let i = 0; i < nums.length; i++) { ... }: This loop iterates through the input array nums.

  - if (nums[i] === nums[index]) { ... }: This condition checks if the current element is equal to the element at the current valid position in the modified array. If true, it increments the count for that element.

  - if (count <= 2) { ... }: This condition checks if the count for the current element is less than or equal to 2. If true, it increments the index, copies the current element to the next valid position in the modified array, and effectively removes duplicates beyond the second occurrence.

  - nums.length = index + 1;: This statement truncates the modified array to remove any excess elements beyond the last valid position (index + 1), ensuring that only unique elements (with at most two occurrences) remain.

  - return nums;: This returns the modified array after removing duplicates.

  - The function removeDuplicates is called with the example input [1,1,1,2,2,3], but the result is not utilized or logged anywhere. You might want to log or use the result somewhere else in your code.
 * */ 