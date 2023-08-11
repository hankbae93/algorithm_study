// i, j
// 0 1
// 0 2
//
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {}; // window
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}

// findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
// findLongestSubstring('thisisawesome'); // 6
// findLongestSubstring('thecatinthehat'); // 7
// findLongestSubstring('bbbbbb'); // 1
// findLongestSubstring('longestsubstring'); // 8
// findLongestSubstring('thisishowwedoit'); // 6
