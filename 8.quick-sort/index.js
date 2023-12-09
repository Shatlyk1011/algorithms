//Time complexity - N log^n
//Space complexity: N

function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr);
    }
  }
  console.log("2", arr);
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4, 1, 2, 5, 6, 9, 4, 3]);
