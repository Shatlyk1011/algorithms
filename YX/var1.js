module.exports = function (func) {
  const uniqueUsers = {};
  const getTime = (date) => date.toISOString().split("T")[0];
  function getUniqueUsers(time) {
    return Array.from(uniqueUsers[time]).map(() => ({
      date: time,
      users: uniqueUsers[time].size,
    }));
  }
  return function (credentials, ...args) {
    const { login, password, date } = credentials;
    const time = getTime(date);
    const validation =
      typeof login !== "string" || typeof password !== "string" || !password || !login;
    if (validation) {
      return uniqueUsers[time] ? [getUniqueUsers(time)[0]] : [];
    }
    func(...args);
    if (!uniqueUsers[time]) {
      uniqueUsers[time] = new Set();
    }
    uniqueUsers[time].add(login);
    return [getUniqueUsers(time)[0]];
  };
};
