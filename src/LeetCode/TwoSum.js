/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  Example:
  Given nums = [2, 7, 11, 15], target = 9,
  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
 * */
export default function TwoSum() {
  function twoSum(nums, target) {

    //Create a hash map to store the elements and their indices.
    const hashMap = {};

    // Iterate through the array.
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      // Calculate the differnce needed to reach the target.
      const difference = target - num;

      // Check if the difference exist in the hash map.
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
      if (hashMap.hasOwnProperty(difference)) {

        console.log('hashMap[difference]', difference, i, hashMap[difference], hashMap);
        // If it does, return the indices of the current element and the element with the dofference.
        return [hashMap[difference], i]
      }

      // If the difference doesn't exist, add the current element to the hash map
      hashMap[num] = i
      console.log('hashMap[num] = i: ', num, i, hashMap[num]);
    }

    // If no solution is found, return null or throw an error as per your requirement.
    return null;
  }

  // Example usage.
  const nums = [11, 15, 2, 7];
  const target = 9;
  twoSum(nums, target);
  console.log('result: ', twoSum(nums, target));
}