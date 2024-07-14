Array.prototype.groupBy = function (fn) {
  let group = {};

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i]);
    // ???????

    // group[key] ? group[key].push(this[i]) : (group[key] = [this[i]]);

    if (group[key]) {
      group[key].push(this[i]);
    } else {
      group[key] = [this[i]];
    }
  }

  return group;
};

const array = [{ id: "1" }, { id: "1" }, { id: "2" }];

const fn = function (item) {
  return item.id;
};

console.log(array.groupBy(fn));
