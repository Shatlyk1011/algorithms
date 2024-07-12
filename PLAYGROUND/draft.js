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

// // MERGE 2 SORTED ARRAYS
// const merge = (arr1, arr2) => {
//   let results = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }

//   return results;
// };

// console.log(merge([2, 3, 51, 66], [42, 123, 403, 1200]));

// const mergeSort = (arr) => {
//   if (arr.length <= 1) return arr;

//   let middle = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, middle));
//   let right = mergeSort(arr.slice(middle));

//   return merge(left, right);
// };

// let arr = [
//   10, 54, 76, 95, 99, 10, 4, 234, 231, 125, 123, 12, 235, 25, 1, 321, 123, 123, 123, 124, 124, 2346,
//   256, 3567, 251234, 12, 52, 75, 6754, 61, 313,
// ];
// console.log(mergeSort(arr));
// console.log("length", mergeSort(arr).length);
// console.log("length", arr.length);

//////
// function maxChar(str) {
//   let obj = {}
//   let max = 0
//   let maxChar = ''
//   for(const char of str) obj[char] = obj[char] + 1 || 1

//   // in object use IN to get KEYS
//   for(let idx in obj) {
//     if(obj[idx] > max) {
//       max = obj[idx]
//       maxChar = idx
//     }
//   }

//   return maxChar

// }

// console.log('maxChar', maxChar('hekkkkkkkkkkkkkkkko'));  



//////// fizzbuzz
// const fizzBuzz = (number) => {
//   for(let i = 1; i <= number; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzBuzz');
//       continue;
//     } else if(i % 5 === 0) {
//       console.log('buzz');
//       continue;
//     } else if (i % 3 === 0) {
//       console.log('fizz')
//       continue
//     } else console.log(i)
//   }
// }

// console.log(fizzBuzz(15))


// need refactor
// const arrayChunk= (arr, size) => {
//   let maxSize = Math.ceil(arr.length /size)
//   let chunk = []
//   let count = 0
//   for(let i = 0; i < maxSize; i++) {
//     let temp = []  
//     for(let j = 0; j< size; j++) {
//       if(arr[count]) {
//         temp.push(arr[count])
//         count++
//       }
//     }
//       chunk.push(temp)

//   }
//   return chunk
// }

// console.log('arr', arrayChunk([12,123,12,1,241,24,425,34,2,3,4,6,3,4,45,6,7,], 5));


//YANDEX PRACTICS

// const hehe1 = (jewelry, stone) => {
//   let total = 0;
//   for (let char of stone) {
//     if (jewelry.includes(char)) {
//       ++total;
//     }
//   }

//   return total;
// }


// function JS(jewelry, stone) {
//   let total = 0;
//   for (let char of stone) {
//     if (jewelry.includes(char)) {
//       ++total;omen
//     }
//   }

//   return total;
// }

// const isPalindrome = (s) => {
//   let lover = s.toLowerCase()
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i], s[s.length - 1])
//     if (lover[i] === lover[s.length - 1]) {
//       return true;
//     }
//     return false;
//   }
// };

// console.log(isPalindrome("Was it a car or a cat I saw?"));
// function JS2(arr) {
//   let counter = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//       counter++;
//     } else {
//       counter = 0;
//     }
//     if (counter > max) {
//       max = counter;
//     }
//   }

//   return max;
// }

// console.log(JS2([1, 21, 1, 1, 1, 1, 1, 2, 2, 1, 2, 1, 2, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4]));

// console.log(JS3([1, 2, 4, 1, 2, 5, 6, 4, 3, 3, 2]));

// function isAnagram (str1, str2) {
//   const obj1 = {};
//   const obj2 = {};

//   for (let char of str1) {
//     obj1[char] = obj1[char] + 1 || 1;
//   }

//   for (let char of str2) {
//     obj2[char] = obj2[char] + 1 || 1;
//   }

//   const obj1Vals = Object.values(obj1);
//   const obj2Vals = Object.values(obj2);

//   if (obj1Vals.length !== obj2Vals.length) return 0;

//   for (let char of obj1Vals) {
//     if (obj1Vals[char] !== obj1Vals[char]) return 0;
//   }

//   return 1;
// };

// console.log(isAnagram('qiu', 'iuq'))

// var removeDuplicates = function (nums) {
//   let i = 0;

//   while (i < nums.length) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
//   return nums;
// };


// console.log(removeDuplicates([0,0,1,1,1, 1,2,2,3,3,3,4]))
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

//SHUFFLE ARRAY 

// var shuffle = function (nums, n) {
//   const shuffle = [];
//   const middle = Math.floor(nums.length / 2);
//   const left = nums.slice(0, middle);
//   const right = nums.slice(middle);

//   console.log(middle, left, right);

//   return shuffle;
// };

// shuffle([2,4,5,6,7,4], 3)

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// const myPromise = new Promise((resolve, reject) => {
//   console.log(3);
//   resolve(4);
// }).then((value) => console.log(value));

// console.log(5);

//reverse string 
// const reverse = (s) => {
//   let res = ''

//   for(let char of s) {
//     res = char + res
//   }

//   return res
// }


// isPalindrome

// const isPalindrome = (s) => {
//   let left = 0;
//   let right = s.length - 1;

//   while(left < right) {
//     console.log('while');

//     if(s[left] !== s[right]) {
//       return false;
//     }

//     left++;
//     right--
//   }

//   return true
// }

// console.log(isPalindrome('leftitfel'))

// const isPalindrome2 = (s) => {
//   return s === s.split('').reverse().join('');
// }

// console.log(isPalindrome2('hell lo'))


//reverse int
// const reverseInt = (num) => {
//   let reversed = ''

//   const numToStr = num + '';

//   for(let char of numToStr) {
//     reversed = char + reversed
//   }
//   return parseInt(reversed) * Math.sign(num)
// }

// console.log('reverseInt', reverseInt(-423));

//maxChar

const maxChar = (s) => {
  //return the char which repeats the most 
  // accccccb => c
  // 1) loop through word
  // 2) create an object (dictionary) and collect the char amount. 
  // 3) loop through object and return with the highest amount
  const obj = {}

  let max = 0
  let maxChar = ''

  for(let char of s) {
    obj[char] = obj[char] + 1 || 1 
  }

  for(let key in obj) {
    if(obj[key] > max) {
      max = obj[key]
      maxChar = key
    }
  }

  return maxChar
}

// console.log(maxChar('hellll pppppppppppp'));

const fizzBuzz = (num) => {
  // 1) loop through num
  // 2) if num % 3 => fizz 
  // 3) if num % 5 => buzz 
  // 4) if num % 5 && num % 3 => fizzBuzz
  
  for(let i = 1; i <= num; i++) {
    if(i % 3 === 0 && i % 5 === 0) console.log('fizzBuzz')
    else if(i % 3 === 0) console.log('fizz')
    else if(i % 5 === 0) console.log('buzz')
    else console.log(i);
  }
}

// fizzBuzz(15);


//array chunking

// const arrayChunk = (arr, size) => {
//   const res = []
//   let index = 0

//   while(index < arr.length) {
//     const chunk = arr.slice(index, size + index )

//     res.push(chunk)
//     index +=size
//   }

//   return res
  
// }

// console.log(arrayChunk([1,2,3,4,5,6,7], 4))


// const anagrams = (str1, str2) => {
//   // 0) check if str's length are equal 
//   // 1) create 2 object 
//   // 2) store key values of each strings as dictionary 
//   // 3) compare 2 object keys and values 
//   // 4) if the values are not queal, return false else true

//   if(str1.length !== str2.length) return false

//   const obj1 = {}
//   const obj2 = {}

//   for(let char of str1) {
//     obj1[char] = obj1[char] + 1 || 1;
//   }

//   for(let char of str2) {
//     obj2[char] = obj2[char] + 1 || 1;
//   }

//   for(let key in obj1) {
//     if(obj1[key] !== obj2[key]) {
//       return false
//     }
//   }

//   return true
// }

// console.log('anagrams', anagrams('bay bo', 'yab ob'));

// const capitilize = (str) => {
//   const strArr = str.split(' ')

//   const upperArr = strArr.map(item => {
//     let capital = item[0].toUpperCase()
//     return capital + item.slice(1)
//   })

//   return upperArr.join(' ')
// }

// console.log('capitilize', capitilize('hlelo world hmhm'));

// const steps = (num) => {

//   for(let i = 0 ; i < num; i++){
    
//     let j = 0;
//     let str = '';

//     while(num > j) {
//       if(j <= i) {
//         str += "#"
//       } else {
//         str += " "
//       }
//       j++
//     }
//   }
// }

// console.log(steps(2));

// const findVowels = (str) => {
//   const vowels = ['a', 'o', 'e', 'i', 'u']
//   let finded = 0

//   for(let char of str) {
//     if(vowels.includes(char)) {
//       finded++
//     }
//   }

//   return finded
// }

// console.log(findVowels('aaaoooeeeiiiuuu'));

// const findVowels2 = (str) => {
//   const matches = str.match(/[aeoui]/g)


//   return matches?.length ?? 0

// }

// console.log(findVowels2('bb'));

// const matrix = (num) => {
//   let res = []

//   for(let i = 0; i < num; i++) {

//     let j = 0;
//     let arr = [];

//     while(num >= j) {

//       if(num === j) {
//         res.push(arr);
//       } else {
//         arr.push(i + j);
//       }

//       j++
//     }
//   }

//   return res
// }

// console.log('matrix', matrix(5));

var createCounter = function(init) {
  let val = init;

  return {
    increment: function() {
      return ++val;
    },
    reset: function() {
      val = init;
      return val;
    },
    decrement: function() {
      return --val;
    }
  };
};


// The issue with the function createCounter lies in how it handles the variable val. Specifically, val is being modified with the ++ and -- operators, but these modifications do not persist across function calls because val is re-initialized every time the returned inner function is called. Additionally, the reset function is supposed to reset val to its initial value, but it only returns init without actually updating val.

// To fix this, you need to ensure that val persists across calls and is correctly reset when needed. Here is the corrected version of the function:

const counter = createCounter(5)

console.log(counter.increment());