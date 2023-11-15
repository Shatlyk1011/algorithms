const stringSearch = (string, pattern) => {
  let matches = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      console.log(string[i], pattern[j]);
    }
  }
};

console.log(stringSearch("helloWorld", "hrh"));
