// 배열과 숫자 정수를 받음
// 해당 배열에서 인접한 조합을 활용하여 숫자 정수보다 크거나 같은 값을 만들 수 있는 조합을 찾아라
// 그 조합 중에서도 가장 작은(짧은) 배열의 length를 구해라

function minSubarrayLen(nums, sum) {
  let total = 0; // window
  let start = 0;
  let end = 0;
  let minLen = nums.length;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      console.log({ end, total });
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      console.log({ start, total });
      start++;
    } else {
      break;
    }
  }

  console.log(minLen);
  return minLen;
}

minSubarrayLen([2, 3, 1, 2, 4, 3], 7);
