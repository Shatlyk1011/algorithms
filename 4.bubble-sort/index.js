//Bubble sort
// Time complexity - N^2
//use case: when you know your data is nearly sorted

// UNOPTIMIZED
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// OPTIMIZED
// const bubbleSort = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //swap
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

//THE BEST VERSION with "noswaps"
const bubbleSort = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([3, 2, 6, 1, 6, 8, 12, 52, 4]));
