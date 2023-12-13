//Time complexity - N^2
//Space complexity - 1

// const insertionSort = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// };

// console.log(insertionSort([2, 1, 5, 23, 65, 2, 43]));

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort([2, 1, 5, 23, 65, 2, 43]));
