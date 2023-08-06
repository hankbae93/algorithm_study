function validAnagram(anagramText, text) {
  if (anagramText.length !== text.length) {
    return false;
  }

  const anagram = {};

  for (let i = 0; i < anagramText.length; i++) {
    const char = anagramText[i];
    if (anagram[char]) {
      anagram[char]++;
    } else {
      anagram[char] = 1;
    }
  }

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const count = anagram[char];

    if (anagram[char]) return false;
    if (count) {
      anagram[char]--;
    }
  }

  return Object.values(anagram).reduce((acc, cur) => acc + cur, 0) === 0;
}

// console.log(`validAnagram("", "")`, validAnagram('', ''));
// console.log(`validAnagram('aaz', 'zza')`, validAnagram('aaz', 'zza'));
console.log(
  `validAnagram('anagram', 'nagaram')`,
  validAnagram('anagram', 'nagaram')
);
console.log(
  `validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')`,
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')
);
console.log(
  `validAnagram('qwerty', 'qeywrt')`,
  validAnagram('qwerty', 'qeywrt')
);
