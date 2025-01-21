var searchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    const currArr = matrix[middle];

    if (currArr[currArr.length - 1] >= target && currArr[0] <= target) {
      let iStart = 0;
      let iEnd = currArr.length - 1;
      let iMiddle = Math.floor((iStart + iEnd) / 2);

      while (iStart <= iEnd && currArr[iMiddle] !== target) {
        if (currArr[iMiddle] > target) {
          iEnd--;
        } else {
          iStart++;
        }
        iMiddle = Math.floor((iStart + iEnd) / 2);
      }

      return currArr[iMiddle] === target;
    } else {
      if (currArr[0] > target) {
        end--;
      } else {
        start++;
      }
    }
    middle = Math.floor((start + end) / 2);
  }

  return false;
};

const arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
console.log(searchMatrix(arr, 61));
