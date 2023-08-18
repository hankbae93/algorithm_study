function reverse(str) {
  if (!str) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// console.log(reverse('awesome')); // 'emosewa'

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}
// console.log(isPalindrome('amanaplanacanalpanama')); // true
// isPalindrome('amanaplanacanalpandemonium') // false

const isOdd = (val) => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
function someRecursive(arr, cb) {
  if (arr.length === 0) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}

// console.log(someRecursive([1, 2, 3, 4], isOdd));

// arg : array
// 첫번째 인자가 배열이면
function flatten(oldArr) {
  var newArr = [];
  console.log(oldArr);
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
/*
0 1,
 [1, [2, [3, 4], [[5]]]]
[[2, [3, 4], [[5]]]]
[[[3, 4], [[5]]]]
[[[3, 4], [[5]]]]
 */

// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
