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
