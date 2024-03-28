export default function QuestionLogOutDuplicateNumbers() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  const frequencyMap = {};

  // Đếm số lần xuất hiện của mỗi phần tử trong mảng và lưu vào hashmap
  arr.forEach(num => {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  });
  console.log('frequencyMap', frequencyMap);

  // Log ra các số trùng lặp
  for (const num in frequencyMap) {
    if (frequencyMap[num] > 1) {
      console.log(`${num} xuất hiện ${frequencyMap[num]} lần`);
    }
  }
}