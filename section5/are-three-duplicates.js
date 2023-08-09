function areThreeDuplicates() {
  const lookup = {};

  for (let i = 0; i < arguments.length; i++) {
    if (lookup[arguments[i]]) {
      return true;
    } else {
      lookup[arguments[i]] = 1;
    }
  }

  return false;
}

console.log(areThreeDuplicates(1, 2, 3));
console.log(areThreeDuplicates(1, 2, 3, 1));

function solution1() {
  const collection = {};
  for (const val in arguments) {
    collection[arguments[val]] = collection[arguments[val]] || 0;
  }

  for (const key in collection) {
    if (collection[key] > 1) return true;
  }

  return false;
}

function solution2(...args) {
  args.sort((a, b) => a > b);

  let start = 0;
  let next = 1;
  console.log(args);
  while (next < args.length) {
    console.log({ a: args[start], b: args[next] });
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }

  return false;
}
console.log(solution2(1, 2, 3, 1));
console.log(solution2('a', 'b', 'c', 'a'));

// O(1)
// Set으로 중복 제거 날로 먹기
function solution3() {
  return new Set(arguments).size !== arguments.length;
}
