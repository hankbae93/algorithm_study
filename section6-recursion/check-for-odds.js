function checkForOdds(arr) {
  if (arr.length === 0) return false;
  const isOdd = arr[0] % 2 === 1;
  return isOdd || checkForOdds(arr.slice(1, arr.length));
}

const arr = [3142, 5798, 6550, 5914];
checkForOdds(arr);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial2(num - 1);
}

console.log(factorial2(10));
