function averagePair(arr, num) {
  if (arr.length === 0) return false;
  arr.sort((a, b) => a - b);

  let start = 0;
  let next = arr.length - 1;

  while (start < next) {
    const left = arr[start];
    const right = arr[next];
    const average = (left + right) / 2;

    if (average === num) {
      return true;
    } else if (num > average) {
      start++;
    } else {
      next--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
