// Find Vovels 1
const findVowels = (str) => {
  const vowels = ["a", "o", "e", "i", "u"];
  let finded = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      finded++;
    }
  }

  return finded;
};

console.log(findVowels("aaaoooeeeiiiuuu"));

// Find Vovels 2
const findVowels2 = (str) => {
  const matches = str.match(/[aeoui]/g);

  return matches?.length ?? 0;
};

console.log(findVowels2("bb"));
