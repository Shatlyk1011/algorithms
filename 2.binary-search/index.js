//Time Complexity: O(log(n)) - since we split search area by two for every iteration.

const data = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210,
  220, 230, 240, 250, 260, 270, 280, 290, 300,
];

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val > arr[middle]) start = middle + 1;
    else end = middle - 1;

    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
};

console.log(binarySearch(data, 200));
