// 1) MERGE ARRAYS
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

console.log(merge(nums1, m, nums2, n));

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

var majorityElement = function(nums) {
  let obj = {}
  
  for(let i = 0; i< nums.length; i++){
    obj[nums[i]] ? obj[nums[i]] = obj[nums[i]] + 1 : obj[nums[i]] = 1
  };

  Object.keys(obj).forEach(key => {
    if(obj[key] > obj[maxKey]) maxKey = key
  })
  return maxKey
}


console.log(majorityElement([1,2,3,4,4,4,5,2,1,2,1,1,1,1,1,1,9,9,9,9,9,9]))