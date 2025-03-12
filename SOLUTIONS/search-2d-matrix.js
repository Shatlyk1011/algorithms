const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i++) {
    let currArr = matrix[i];
    let lastItem = currArr[matrix[i].length - 1];
    if (lastItem < target) {
      continue;
    }
    let left = 0;
    let right = currArr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (right > left && currArr[middle] !== target) {
      if (currArr[middle] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }

      middle = Math.floor((left + right) / 2);
    }

    if (currArr[middle] === target) {
      return true;
    }
  }

  return false;
};

let twoD = [
  [1, 2, 4, 8],
  [10, 11, 12, 13],
  [14, 20, 30, 40],
];
console.log(searchMatrix(twoD, 41));
