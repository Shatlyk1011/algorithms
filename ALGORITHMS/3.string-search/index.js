const stringSearch = (string, pattern) => {
  let matches = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== string[i + j]) break;
      if (j === pattern.length - 1) matches++;
    }
  }
  return matches;
};

console.log(stringSearch("muchacho", "ch"));
