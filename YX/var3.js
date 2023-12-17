module.exports = function sortData(data, order, field) {
  const orderMap = new Map(order.map((value, index) => [value, index]));
  const sortedData = data.sort((a, b) => {
    const idxA = orderMap.get(a);
    const idxB = orderMap.get(b);

    if (idxA !== undefined && idxB !== undefined) return idxA - idxB;
    else if (idxA !== undefined) return -1;
    else if (idxB !== undefined) return 1;
    else return 0;
  });

  if (field) {
    sortedData.sort((a, b) => {
      if (typeof a[field] === "string") {
        return a[field].localeCompare(b[field]);
      } else if (typeof a[field] === "number") {
        return a[field] - b[field];
      } else {
        return 0;
      }
    });
  }

  return sortedData;
};
