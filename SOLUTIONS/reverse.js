//REVERSE STRING v1
const reverseStr = (str) => {
  let reversed = [];
  for (let i = 0; i < str.length; i++) {
    reversed.push(str[str.length - i - 1]);
  }

  return reversed.join("");
};

console.log(reverseStr("salamaleykum"));

// REVERSE STRING 2 (BEST)
const reverse = (s) => {
  let res = "";

  for (let char of s) {
    res = char + res;
  }

  return res;
};

console.log("reverse", reverse("hello world"));

// REVERSE INTIGER
const reverseInt = (num) => {
  let reversed = "";

  const numToStr = num + "";

  for (let char of numToStr) {
    reversed = char + reversed;
  }
  return parseInt(reversed) * Math.sign(num);
};

console.log("reverseInt", reverseInt(-423));
