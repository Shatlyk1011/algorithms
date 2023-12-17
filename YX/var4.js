module.exports = function solution(N, M, s, t, trails) {
  const graph = new Map();
  for (const trail of trails) {
    const [start, end] = trail;
    if (!graph.has(start)) graph.set(start, []);
    if (!graph.has(end)) graph.set(end, []);
    graph.get(start).push(end);
    graph.get(end).push(start);
  }

  const visited = new Set();
  const paths = [];

  function dfs(node, path) {
    if (node === t) {
      paths.push([...path, t]);
      return;
    }
    visited.add(node);
    for (const neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, [...path, neighbor]);
      }
    }
    visited.delete(node);
  }

  dfs(s, [s]);
  console.log("hm");
  return paths.length > 0 ? paths : false;
};
