// is object empty 1
const isEmpty = function (obj) {
  const objKeys = Object.keys(obj);
  return objKeys.length > 0 ? false : true;
};

console.log(isEmpty({}));
