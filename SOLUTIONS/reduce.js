// array reduce method

const reduce = function (nums, fn, init) {
  if (!nums.length) return init;

  let curr = init || 0;

  for (let i = 0; i < nums.length; i++) {
    // interesting part to remember
    curr = fn(curr, nums[i]);
  }

  return curr;
};
