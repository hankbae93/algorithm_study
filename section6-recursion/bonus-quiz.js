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
// flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
/*
0 1,
 [1, [2, [3, 4], [[5]]]]
[[2, [3, 4], [[5]]]]
[[[3, 4], [[5]]]]
[[[3, 4], [[5]]]]
 */

// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]

function capitalizeFirst(arr) {
  if (arr.length === 0) return [];
  const newArr = [];
  const item = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  return newArr.concat(item, capitalizeFirst(arr.slice(1)));
}
// console.log(capitalizeFirst(['car', 'taco', 'banana']));

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      aa: {
        v: 6,
      },
      alsoNotANumber: 'yup',
    },
  },
};

function nestedEvenSum(obj) {
  let num = 0;
  const arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) break;
    const value = arr[i][1];

    if (typeof value === 'number') {
      num += value % 2 === 0 ? value : 0;
    } else if (typeof value === 'object') {
      num += nestedEvenSum(value);
    }
  }

  return num;
}

// console.log(nestedEvenSum(obj1));

function capitalizeWords(arr) {
  if (!arr[0]) return [];
  const newArr = [];

  return newArr.concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)));
}
// console.log(capitalizeWords(['dqqq', 'figure', 'attribute']));

let obj2 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
function stringifyNumbers(obj) {
  const result = {};
  const arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) break;
    const key = arr[i][0];
    const value = arr[i][1];

    if (typeof value === 'number') {
      result[key] = `${value}`;
    } else if (!Array.isArray(value) && typeof value === 'object') {
      result[key] = stringifyNumbers(value);
    } else {
      result[key] = value;
    }
  }

  return result;
}
// console.log(stringifyNumbers(obj2));

const obj3 = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};
function collectStrings(obj) {
  let result = [];
  const arr = Object.entries(obj);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) break;
    const value = arr[i][1];

    if (typeof value === 'string') {
      result.push(value);
    } else if (!Array.isArray(value) && typeof value === 'object') {
      result = result.concat(collectStrings(value));
    }
  }

  return result;
}
console.log(collectStrings(obj3));
