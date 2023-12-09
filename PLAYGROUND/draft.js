// function twoSum(nums, target) {
//   const numToIndex = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (numToIndex.has(complement)) {
//       return [numToIndex.get(complement), i];
//     }
//     numToIndex.set(nums[i], i);
//   }
//   return []; // No solution found!
// }

// console.log(twoSum([0, 2, 1, 1, 24, 6, 3, 4, 6, 5, 4, 4, 4], 4));

//REVERSE STRING
// const reverseStr = (str) => {
//   let reversed = [];
//   for (let i = 0; i < str.length; i++) {
//     reversed.push(str[str.length - i - 1]);
//   }

//   return reversed;
// };

// console.log(reverseStr("salamaleykum"));

//ANAGRAM (same strs)

//BINARY SEARCH
// given a sorted array, find "val" if it exist, or return -1
// const binarySearch = (arr, val) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== val && start !== end) {
//     if (arr[middle] < val) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//     console.log("middle", middle);
//     middle = Math.floor((start + end) / 2);
//   }

//   return arr[middle] === val ? val : -1;
// };

// console.log(
//   binarySearch(
//     [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
//     192
//   )
// );

// BUBBLE SORT
// given an unsorted array > return sorted
// const bubbleSort = (arr) => {
//   let count = 0;
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   let noSwaps;
//   //
//   for (let i = 0; i < arr.length; i++) {
//     count++;
//     noSwaps = true;
//     for (let j = 0; j < arr.length; j++) {
//       count++;
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//     }
//     // if (noSwaps) break;
//   }
//   console.log(count);
//   return arr;
// };


//BUBBLE SORT
// const bubbleSort = (arr) => {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };
//   let noSwaps;

//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }

//   return arr;
// }

// console.log(bubbleSort([3,42,5,6,2,1,4,3,6,7,]))

//MERGE SORT

// MERGE 2 SORTED ARRAYS
const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

console.log(merge([2, 3, 51, 66], [42, 123, 403, 1200]));

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
};

let arr = [
  10, 54, 76, 95, 99, 10, 4, 234, 231, 125, 123, 12, 235, 25, 1, 321, 123, 123, 123, 124, 124, 2346,
  256, 3567, 251234, 12, 52, 75, 6754, 61, 313,
];
console.log(mergeSort(arr));
console.log("length", mergeSort(arr).length);
console.log("length", arr.length);
