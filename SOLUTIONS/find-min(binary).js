// const findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = left + Math.floor((right - left) / 2);

//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   return nums[left];
// };

// var findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let middle = Math.floor(left + (right - left) / 2);

//     if (nums[middle] > nums[right]) {
//       left = middle + 1;
//     } else {
//       right = middle;
//     }
//   }

//   return nums[left];
// };

// console.log(findMin([3, 4, 5, 1, 2]));

// const missingNumber = function (nums) {
//   if (nums.length === 1) return nums[0];
//   let sorted = nums.sort((a, b) => a - b);
//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (nums[i] + 1 === nums[i + 1]) continue;
//     return nums[i] + 1;
//   }
//   return sorted[sorted.length - 1] + 1;
// };
// console.log("missing", missingNumber([0, 1, 5, 4, 6, 3, 2, 7, 9]));

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
};

console.log("isPalindrome", isPalindrome("abba"));
