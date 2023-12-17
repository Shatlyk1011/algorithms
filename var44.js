module.exports = function solution(racers, overtakings, first) {
  const graph = new Map();
  for (const racer of racers) {
    graph.set(racer, []);
  }
  for (const { leading, lagging } of overtakings) {
    if (!graph.has(leading)) graph.set(leading, []);
    if (!graph.has(lagging)) graph.set(lagging, []);
    graph.get(lagging).push(leading);
    graph.get(leading).push(lagging);
  }

  const visited = new Set();
  const paths = [];

  function dfs(node, path) {
    visited.add(node);
    path.push(node);
    if (node === first) {
      paths.push([...path]);
    } else {
      for (const neighbor of graph.get(node)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor, [...path]);
        }
      }
    }
    visited.delete(node);
    path.pop();
  }

  dfs(first, []);
  return paths.sort();
};
