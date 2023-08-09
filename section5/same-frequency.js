function sameFrequency(first, second) {
  if (first.toString().length !== second.toString().length) return false;

  const lookup = {};

  // 굳이 배열로 안했어도 됨
  const arr1 = first.toString().split('');
  for (let i = 0; i < arr1.length; i++) {
    if (lookup[arr1[i]]) {
      lookup[arr1[i]] += 1;
    } else {
      lookup[arr1[i]] = 1;
    }
  }

  // 반복문을 세번하는 게 더 확실한지가 궁금함
  // 객체 두개를 key value 다 비교하나
  // 도는 김에 카운트까지 하나 다른 게 있나 싶다. 둘다 O(n)
  // 가독성 면에서는 솔루션이 좀 더 명확하다.
  const arr2 = second.toString().split('');
  for (let j = 0; j < arr2.length; j++) {
    if (lookup[arr2[j]]) {
      lookup[arr2[j]] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

function refactorSameFrequency(first, second) {
  const str1 = first.toString();
  const str2 = second.toString();
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
  }

  for (let j = 0; j < str2.length; j++) {
    if (lookup[str2[j]]) {
      // 있으면 마이너스 1
      lookup[str2[j]] -= 1;
    } else {
      // 해당 키가 없거나, 0이거나
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281));
console.log(refactorSameFrequency(34, 14));
console.log(sameFrequency('asdasvavbbbaaaaa', 'asdadvavbbbaazaa'));

function solution(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  const countNum1 = {};
  const countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum2.length; j++) {
    countNum2[strNum2[i]] = (countNum2[strNum2[i]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
}
