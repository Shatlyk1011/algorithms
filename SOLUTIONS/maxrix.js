const matrix = (num) => {
  let res = [];

  for (let i = 0; i < num; i++) {
    const arr = Array.from({ length: num }).map((_, i) => i);
    res.push(arr);
  }

  return res;
};

console.log("matrix", matrix(5));
