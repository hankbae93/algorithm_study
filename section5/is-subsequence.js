// subsequence란 오른쪽 문자열에서 각 문자를 뽑아서 왼쪽 문자열을 만들 수 있는지 물어보는 문제
// 순서는 지켜야함
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (i < str1.length) {
    if (j === str2.length) return false;

    if (str1[i] === str2[j]) {
      i++;
    }

    j++;
  }

  return true;
}
// console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting'));
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

function solution1(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;

    if (i === str1.length) return true;
    j++;
  }

  return false;
}

// console.log(solution1('abc', 'abracadabra'));

function solution2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));

  return isSubsequence(str1, str2.slice(1));
}
