//Array Chunks (best)

const chunk = function (arr, size) {
  const chunked = [];

  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, size + i));
  }

  return chunked;
};

console.log(chunk([1, 2, 3, 4, 5], 4));

// Array chunk
const arrayChunk = (arr, size) => {
  const res = [];
  let index = 0;

  while (index < arr.length) {
    const chunk = arr.slice(index, size + index);

    res.push(chunk);
    index += size;
  }

  return res;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7], 4));
