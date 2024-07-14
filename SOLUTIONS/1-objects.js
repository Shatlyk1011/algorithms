// is object empty 1
const isEmpty = function (obj) {
  const objKeys = Object.keys(obj);
  return objKeys.length > 0 ? false : true;
};

// is object empty 2
const isEmpty2 = function (obj) {
  for (let key in obj) {
    console.log("key", key);
    return key ? true : false;
  }
};
console.log(isEmpty2({}));
