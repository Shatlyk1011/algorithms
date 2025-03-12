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

// const debounce = (fn, delay) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer)

//     timer = setTimeout(() => {
//       fn(args)
//     }, delay)
//   }
// }

// const fn = (x) => x * 5,
//   args = [2],
//   t = 20;

// const cancellable = (fn, args, t) => {
//   const cancelFn = function () {
//     clearTimeout(timer);
//   };

//   const timer = setTimeout(() => {
//     fn(...args);
//   }, t);

//   return cancelFn;
// };

// const debounce = (fn, delay) => {
//   let timer;

//   return () => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// };



//  function test(nums, k) {
//    for (let i = 0; i < nums.length; i++) {
//      for (let j = 1; j < nums.length; j++) {
//        if (nums[i] + nums[j] === k) {
//          return true;
//        }
//      }
//    }

//    return false;
//  }

//  console.log("test", test([1, 5, 7, 3, 2, 5, 5], 8));

// let i = 10;
// var array = [];

// while(i--){
//   array.push(function() {
//     return i + i;
//   });
// }

// console.log(
//   array[0](),
//   array[1](), // Что выведет: 
// )

// var removeDuplicates = function(s) {
//   let res = "";

//   for(let i = 0; i < s.length; i++) {
//       let last = res[res.length - 1];
//       if(s[i] === last) {
//           res = res.slice(-1);
//           continue;
//       }
//       res += s[i];
//   }

//   return res;
// };

// console.log(removeDuplicates('abbaca'));

// var maximumGain = function(s, x, y) {
//   let total = 0;
//   let stack = [];
//   let i = 0;
//   while(i < s.length  ) {
//       let curr = s[i];
//       let last = stack[stack.length - 1];
//       let combine = last + curr;

//       if(combine === 'ab') {
//           total += x;
//           stack.pop()
//       } else if(combine === 'ba') {
//           total += y;
//           stack.pop()
//       }
//       stack.push(s[i])
//       i++
//   }
//   return total
// };

<<<<<<< HEAD
// console.log('maximumGain', maximumGain("cdbcbbaaabab", 4, 5));

=======
>>>>>>> 9b1985937ba9f3f37e613fb4f69488fb3ad9c432
/**
 * Написать калькулятор выражений в обратной польской нотации.
 *
 * Польская нотация:
 * - Выражение состоит из операндов: чисел и знаков операций +, -, *, /
 * - Выражение читается слева направо
 * - Операнды в выражении разделяются пробелами
 * - Когда в выражении встречается знак операции, выполняется соответствующая операция 
 *   над двумя последними встретившимися перед ним операндами в порядке их записи
 * - Результатом вычисления выражения становится результат последней вычисленной операции
 *
 * Нужно вернуть результат вычисления или сообщение об ошибке.
 */

// const calc = (str) => {
//   const toArr = str.split(' ')
//   const stack = []

//   const operators = '+-/*';

//   for(let i = 0; i< toArr.length; i++) {
//     if(!operators.includes(toArr[i])) {
//       stack.push(+toArr[i])
//     } else if(stack.length >= 2) {
//       const val = mathIt(toArr[i], stack[stack.length - 2], stack[stack.length - 1]);
//       stack.pop()
//       stack.pop()
//       stack.push(val)
//     } else {
//       console.log('Syntax error')
//       break
//     }
//   }

//   return stack
// }

// const mathIt = (operand, val1, val2) => {
//   switch(operand) {
//     case "+": return val1 + val2
//     case "*": return val1 * val2
//     case "-": return val1 - val2
//     case "/": return val1 / val2
//   }
// }

// console.log(calc('7 2 * 3 +'))   // 7 * 2 + 3 = 17 
// console.log(calc('7 2 3 * -'))    // 7 - (2 * 3) = 1
// console.log(calc('7 2 3 1 + * -'))    // 7 - 2 * (3 + 1) = -1

// console.log(calc('11 -12 -'))    // ?   тут нужно ответить 
// console.log(calc('7 2 3 1 * - - 3 5 + -'))  // ?

// console.log(calc('1 1 + +') )     // Error in Syntax
// console.log(calc('1 2 2 *') )     // Error in Syntax
// console.log(calc('1 b + c -'))    // Error in Operands


// TINFOFF

// function fn(str) {
//   const parts = str.split(',');
//   const result = new Set();

//   parts.forEach(part => {
//     if (part.includes('-')) {
//       const [start, end] = part.split('-').map(Number);
//       for (let i = start; i <= end; i++) {
//         result.add(i);
//       }
//     } else {
//       result.add(Number(part));
//     }
//   });

//   // const resultList = Array.from(result)
//   return Array.from(result).join(' ').sort((a, b) => a-b);
// }

function fn(str) {
  const parts = str.split(',');
  let result = '';

  parts.forEach(part => {
    if (part.includes('-')) {
      const [start, end] = part.split('-').map(Number);
      for (let i = start; i <= end; i++) {
        if (result) result += ' ';
        result += i;
      }
    } else {
      if (result) result += ' ';
      result += Number(part);
    }
  });

  return result;
}
const str = "1-6,8-9,11";
const output = fn(str);
console.log(output); 

// function fn(str) {
//   const parts = str.split(',');
//   const result = new Set();

//   parts.forEach(part => {
//       if (part.includes('-')) {
//           const [start, end] = part.split('-').map(Number);
//           for (let i = start; i <= end; i++) {
//               result.add(i);
//           }
//       } else {
//           result.add(Number(part));
//       }
//   });

//   const resultList = Array.from(result).sort((a, b) => a - b);
//   return resultList.join(' ');
// }

// module.exports = fn;