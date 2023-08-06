function countUniqueValues(arr) {
  let currentIndex = 0;
  let item = arr[currentIndex];

  for (let i = 0; i < arr.length; i++) {
    if (i + 1 === arr.length) break;

    const next = arr[i + 1];

    if (next > item) {
      currentIndex++;
      item = next;
    }
  }

  return currentIndex + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
);
