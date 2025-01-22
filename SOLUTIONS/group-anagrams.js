// var groupAnagrams = function (strs) {
//   const result = {};

//   for (let i = 0; i < strs.length; i++) {
//     const hash = strs[i].split("").sort().join("");

//     console.log("hash", hash);
//     if (result[hash]) {
//       result[hash].push(strs[i]);
//     } else {
//       result[hash] = [strs[i]];
//     }
//   }

//   return Object.values(result);
// };

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

var groupAnagrams2 = function (strs) {
  const res = {};

  for (let i = 0; i < strs.length; i++) {
    let hash = strs[i].split("").sort().join("");

    if (res[hash]) {
      res[hash].push(strs[i]);
    } else {
      res[hash] = [strs[i]];
    }
  }

  return Object.values(res);
};

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]));


// Best approach
var groupAnagrams = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join("#");
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


const groupAnagrams3 = (strs) => {
  const res = {}

  for(let str of strs ) {
    const alphabet = new Array(26).fill(0)

    for(let char of str) {
      alphabet[char.charCodeAt() - 97]++
    }

    const hash = alphabet.join("#")

    if(res[hash]) {
      res[hash].push(str)
    } else {
      res[hash] = [str]
    }
  }

  return Object.values(res)
}

groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"]);
