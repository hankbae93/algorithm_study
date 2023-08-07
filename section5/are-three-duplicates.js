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
