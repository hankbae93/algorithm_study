const divideTestArr = [1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29];

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const middleIndex = Math.floor((min + max) / 2);
    const currentElement = array[middleIndex];

    if (currentElement < val) {
      min = middleIndex + 1;
    } else if (currentElement > val) {
      max = middleIndex - 1;
    } else if (currentElement === val) {
      return middleIndex;
    }
  }

  return -1;
}

console.log(search(divideTestArr, 12));
