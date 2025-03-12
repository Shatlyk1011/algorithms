// is object empty 1
const isEmpty = function (obj) {
  const objKeys = Object.keys(obj);
  return !!objKeys.length;
};

console.log(isEmpty({}));

