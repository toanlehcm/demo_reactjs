export default function QuestionLogOutDuplicateNumbers() {
  /*--- Đếm số lần xuất hiện của mỗi phần tử trong mảng và lưu vào hashmap ---*/
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  const frequencyMap = {};

  arr.forEach(num => {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  });
  // console.log('frequencyMap', frequencyMap);

  // Log ra các số trùng lặp
  for (const num in frequencyMap) {
    if (frequencyMap[num] > 1) {
      // console.log(`${num} xuất hiện ${frequencyMap[num]} lần`);
    }
  }

  /*--- Returns array containing duplicate numbers. ---*/
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  const frequencyMap2 = {};
  const duplicates = [];

  // Đếm số lần xuất hiện của mỗi phần tử trong mảng và lưu vào hashmap
  arr2.forEach(num => {
    if (frequencyMap2[num]) {
      frequencyMap2[num]++;
    } else {
      frequencyMap2[num] = 1;
    }
  });

  // Lọc ra các phần tử trùng lặp và thêm vào mảng duplicates
  for (const num in frequencyMap2) {
    if (frequencyMap2[num] > 1) {
      duplicates.push(parseInt(num)); // Chuyển đổi từ string sang number
    }
  }

  console.log(duplicates); // Output: [1, 2]
}