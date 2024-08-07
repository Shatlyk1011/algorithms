const names = ["king kong", "ivan", "danya", "sonya", "adam smith", "Antonia Margareti"];

// O(n) - linear
//best case O(1). worst case O(N); O(1) + O(N) = O(N)
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch(names, "danya"));


const linearS = (arr, val) => {
  for (let [char, idx] of arr) {
    if (char === val) return idx;
  }

  return -1;
};

console.log(linearS(["hello", "world", "muchacho", "hmhmhmh"], "muchacho"));