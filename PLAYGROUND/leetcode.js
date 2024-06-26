// MERGE ARRAYS
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//
//
//
// Example 1:
//
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:
//
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

var merge = function (nums1, m, nums2, n) {};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

// console.log(merge(nums1, m, nums2, n));

//EXPECTED [1,2,2,3,5,6]

// 2) REMOVE ELEMENTS
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// // Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// // Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// let removeElement = function(nums, val) {
// for(let i = nums.length - 1; i >= 0; i--) {
// if(nums[i] === val) {
// nums.splice( , 1);
// }
// }
// console.log('nums', nums)
// return nums;
// };

// var removeElement = function(nums, val) {
//   let count = 0;
//   for(let i = nums.length - 1; i>= 0; i--) {
//     if(nums[i] === val) {
//       nums.splice(i, 1)
//       count++
//     }
//   }
//   console.log(nums)
//   return nums
// };

// removeElement([3,2,2,3], 3)

// 3) REMOVE ELEMENTS
// Given an array nums of size n, return the majority element.
//
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
// Example 1:
//
// Input: nums = [3,2,3]
// Output: 3

// var majorityElement = function(nums) {
//   let obj = {}

//   for(let i = 0; i< nums.length; i++){
//     obj[nums[i]] ? obj[nums[i]] = obj[nums[i]] + 1 : obj[nums[i]] = 1
//   };

//   Object.keys(obj).forEach(key => {
//     if(obj[key] > obj[maxKey]) maxKey = key
//   })
//   return maxKey
// }

// console.log(majorityElement([1,2,3,4,4,4,5,2,1,2,1,1,1,1,1,1,9,9,9,9,9,9]))

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// const isPalindrome = (num) => {
//   const toStr = num + "";
//   const reversed = toStr.split("").reverse().join("");

//   return toStr === reversed;
// };

// let isPalindrome = function (x) {
//   let reverse = 0;
//   let copy = x;

//   while (copy > 0) {
//     const digit = copy % 10;
//     reverse = reverse * 10 + digit;
//     copy = ~~(copy / 10);
//   }

//   return reverse == x;
// };

// console.log("isPalindrom2e", isPalindrome(121));

//HOMEWORK
// Roman to Integer
// Input: s = "III"
// Output: 3
// Explanation: III = 3

// var romanToInt = function(rom) {
//   let res = []
//   for(let char of rom) {
//   }
// };

//HOMEWORK
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.



// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

//easy
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// var romanToInt = function(s) {
//     let total = 0

//     const addTotal = (num) => {
//       total += num
//     }

//     for(let char of s) {
//       switch(char) {
//         case 'I': addTotal(1)
//         break
//         case 'V': addTotal(5);
//         break
//         case 'X': addTotal(10)
//         break
//         case 'L': addTotal(50)
//         break
//         case 'C': addTotal(100)
//         break
//         case 'D': addTotal(500)
//         break
//         case 'M': addTotal(1000)
//       }
//     }

//     return total
// };

// console.log(romanToInt('III'))

//EASY
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

// var getConcatenation = function(nums) {
//   return [...nums, ...nums]
// };

// console.log(getConcatenation([1,2,3]))

//promises

// const asyncOperation = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('timeout exceed')
//       resolve('resolve')
//     }, 2000)
//   })
// }


// async function hehe () {
//   try {
//     console.log('hello world')
//     const val = await asyncOperation()
//     console.log('val', val)
//   } catch(err) {
//     console.log('catch', err)
//   }
// }

// hehe()
// console.log(`the code continuous execution process`)

// function delayDouble(number) {
  // return new Promise((resolve, reject) => {
    // setTimeout(() => resolve(2 * number) ,1000);
  // });
// }
// delayDouble(5)
  // .then(value1 => {
    // console.log(value1); // logs 10
    // return delayDouble(value1);
  // })
  // .then(value2 => {
    // console.log(value2); // logs 20
    // return delayDouble(value2);
  // })
  // .then(value3 => {
    // console.log(value3); // logs 40
  // });

//LeetCode

// https://leetcode.com/problems/baseball-game/description/ - done

var calPoints = function (operations) {
  let result = [];
  for (let i = 0; i < operations.length; i++) {
    let last = result.length - 1;
    switch (operations[i]) {
      case "+": {
        let sum = Number(result[last]) + Number(result[last - 1]);
        result.push(sum);
        break;
      }
      case "D": {
        let sum = result[last] * 2;
        result.push(sum);
        break;
      }
      case "C": {
        result.pop();
        break;
      }
      default: {
        result.push(Number(operations[i]));
        break;
      }
    }
  }

  return result.reduce((prev, curr) => prev + curr, 0);
};

console.log(calPoints(["5","2","C","D","+"]))

// https://leetcode.com/problems/shuffle-the-array/  - done (memory problems)
var shuffle = function (arr, n) {
  const res = [];
  let count = n;
  let state = false;
  for (let i = 0; i < arr.length; i++) {
    if (state) {
      res.push(arr[count]);
      count++;
      state = false;
    } else {
      res.push(arr[count - n]);
      state = true;
    }
  }

  return res;
};

//v2
var shuffle2 = function (arr, n) {
  const shuffle = [];
  for (let i = 0; i < arr.length / 2; i++) {
    shuffle.push(arr[i], arr[i + n]);
  }

  return shuffle;
};

console.log("shuffle", shuffle2([1, 2, 3, 4, 5, 6, 7, 8], 4));