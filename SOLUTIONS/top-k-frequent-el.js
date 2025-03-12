// my BEST O N * logN
var topKFrequent = function (nums, k) {
  const freqObj = {};
  const final = [];
  let res = [];

  for (let num of nums) {
    freqObj[num] = freqObj[num] + 1 || 1;
  }

  for (let key in freqObj) {
    let val = freqObj[key];

    if (res[val]) {
      res[val].push(+key);
    } else {
      res[val] = [+key];
    }
  }

  res = res.filter(Boolean);

  for (let i = res.length - 1; i >= 0; i--) {
    final.push(...res[i]);
    if (final.length >= k) {
      return final;
    }
  }
};

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2));
