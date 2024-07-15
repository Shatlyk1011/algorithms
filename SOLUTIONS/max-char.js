/// MAX CHAR

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxChar = "";
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  // in object use IN to get KEYS
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      maxChar = key;
    }
  }
  return { [maxChar]: obj[maxChar] };
}

console.log("maxChar", maxChar("hekkkkkkkkkkkkkkkko"));

// ❌ unsolved
const maxSubstring = (str) => {
  for (let i = 0; i < str.length; i++) {}
};

console.log(maxSubstring("heekkkkkkeeeeekkkkk"));
