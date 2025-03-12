module.exports = function getCache(maxSize) {
  const cache = new Map();
  const modifiedData = new Map();

  function setCacheChunk(value) {
    const dataArray = Array.isArray(value) ? value : [value];
    dataArray.forEach((data) => {
      if (modifiedData.has(data.id)) {
        modifiedData.delete(data.id);
      }

      if (cache.has(data.id)) {
        cache.delete(data.id);
      }

      cache.set(data.id, data);

      if (cache.size > maxSize) {
        const firstKey = cache.keys().next().value;
        cache.delete(firstKey);
      }
    });
  }

  function changeItem(newData) {
    const dataArray = Array.isArray(newData) ? newData : [newData];
    dataArray.forEach((data) => {
      modifiedData.set(data.id, data);
    });
  }

  function getCacheItemById(id) {
    if (modifiedData.has(id)) {
      return modifiedData.get(id);
    }

    if (cache.has(id)) {
      return data;
    }
    return null;
  }

  function getData() {
    return [...modifiedData.values(), ...cache.values()];
  }

  return {
    setCacheChunk,
    changeItem,
    getCacheItemById,
    getData,
  };
};
