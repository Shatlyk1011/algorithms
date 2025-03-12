const findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
<<<<<<< HEAD
  // console.log("left", left);
=======
  console.log("left", left);
>>>>>>> 9b1985937ba9f3f37e613fb4f69488fb3ad9c432
  return nums[left];
};

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

<<<<<<< HEAD
// console.log(findMin([12, 13, 14, 7, 8, 9, 10, 11]));
=======
console.log(findMin([12, 13, 14, 7, 8, 9, 10, 11]));
>>>>>>> 9b1985937ba9f3f37e613fb4f69488fb3ad9c432

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

// var isPalindrome = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left += 1;
//     right -= 1;
//   }

//   return true;
// };

// console.log("isPalindrome", isPalindrome("abba"));

<<<<<<< HEAD
// console.log("fff", findMin([4, 5, 6, 7, 2, 3]));
// console.log("fff", findMin([5, 6, 8, 99]));

const findMin3 = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    let middle = Math.floor(left + (right - left) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[left];
};

let arr3 = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin3(arr3));
=======
const findMin2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor(left + (left + right) / 2);

    if (arr[mid] > arr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return arr[left];
};

console.log("fff", findMin([4, 5, 6, 7, 2, 3]));
console.log("fff", findMin([5, 6, 8, 99]));
>>>>>>> 9b1985937ba9f3f37e613fb4f69488fb3ad9c432
