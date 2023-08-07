function sameFrequency(first, second) {
  if (first.toString().length !== second.toString().length) return false;

  const lookup = {};

  const arr1 = first.toString().split('');
  for (let i = 0; i < arr1.length; i++) {
    if (lookup[arr1[i]]) {
      lookup[arr1[i]] += 1;
    } else {
      lookup[arr1[i]] = 1;
    }
  }

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

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
