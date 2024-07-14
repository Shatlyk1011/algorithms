// Capitilize

const capitilize = (str) => {
  const strArr = str.split(" ");

  const upperArr = strArr.map((item) => {
    let capital = item[0].toUpperCase();
    return capital + item.slice(1);
  });

  return upperArr.join(" ");
};

console.log(capitilize("hlelo world hmhm"));
