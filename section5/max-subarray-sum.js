function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
    tempSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    const total = tempSum - arr[i - num] + arr[i];
    tempSum = total;

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 3], 3));

function refactor(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let i = num; i < arr.length; i++) {
    const total = tempSum - arr[i - num] + arr[i];
    tempSum = total;
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(refactor([-3, 4, 0, -2, 6, -1], 2));
console.log(refactor([100, 200, 300, 400], 2));
console.log(refactor([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(refactor([-3, 4, 0, -2, 6, -1], 2));
console.log(refactor([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(refactor([2, 3], 3));
