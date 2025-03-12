// input [0010101, 0111, 11110000000, 42100, 214, 442, 244, 222, 00000]

//output [[0010101, 0111], [11110000000], [42100, 214], [442], [244], [222] ]

// log O(n * m)

/*
  1) store on object as {num: freq} structure
  2) get the unique hash of this item
  3) check if its already exists, and if so, push to that item 
  4) else create new array with this hash
*/

const getFreqObj = (num) => {
  const obj = {};
  for (let n of num) {
    if (n == "0") {
      continue;
    }
    obj[n] = obj[n] + 1 || 1;
  }

  return obj;
};

const groupAnagram = (arr) => {
  let objArr = {};

  for (let i = 0; i < arr.length; i++) {
    const freqEl = getFreqObj(arr[i]);

    const keys = Array.from({ length: 9 }).fill(0);

    for (let key in freqEl) {
      keys[key] = freqEl[key];
      // console.log("keys", keys);
    }

    const hash = keys.join("#");
    if (objArr[hash]) {
      objArr[hash].push(arr[i]);
    } else {
      objArr[hash] = [arr[i]];
    }
  }

  return Object.values(objArr);
};

const arr = ["0010101", "0111", "11110000000", "42100", "214", "442", "244", "222", "00000"];
// const arr = ["42100", "12400000"];

//output [[0010101, 0111], [11110000000], [42100, 214], [442], [244], [222] ]

console.log("arr", groupAnagram(arr));
