function power(num, exponent) {
  if (exponent === 0) return 1;
  return num * power(num, exponent - 1);
}

function factorial(num) {
  if (num < 0) return 0; // 음수 체크
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

function productOfArray(nums) {
  if (nums.length === 0) return 1;
  return nums[0] * productOfArray(nums.slice(1));
}

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// console.log(recursiveRange(0)); // 21

// 각 항이 바로 앞의 두 항의 합으로 이루어진 수열에서 인자로 받은 인덱스의 값을 찾아라
// 피보나치 수열: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// 여기서는 1로 시작
// [0] - 1
// [1] - 1
// [2] - 0 + 1 = 1
// [3] - 1 + 1 = 2
// [4] - 1 + 2 = 3
function fib(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      arr[i] = 1;
    } else {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
  }

  return arr[num - 1];
}

function fibRecursion(num) {
  if (num === 0 || num === 1) return 1;
  const nums = [1, 1];

  function helper(helperInput) {
    if (helperInput === num) return nums[nums.length - 1];

    const first = nums[helperInput - 2];
    const second = nums[helperInput - 1];

    nums.push(first + second);
    return helper(helperInput + 1);
  }

  return helper(2);
}

// console.log(fib(4)); // 3
// console.log(fibRecursion(4));
// fib(28) // 317811
// fib(35) // 9227465

function fibSolution(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
