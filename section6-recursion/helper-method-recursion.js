function collectOdds(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(nums);

  return result;
}

function collectOdds2(nums) {
  let newArr = [];

  if (nums.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds2(arr.slice(1)));
  return newArr;
}

console.log(collectOdds([1, 4, 5, 2, 3, 10]));
