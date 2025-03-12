module.exports = function solution({ graph, startVertex, endVertex }) {
  if (!graph || typeof graph !== "object" || Array.isArray(graph)) {
    return [];
  }

  if (!startVertex || typeof startVertex !== "string" || !graph[startVertex]) {
    return [];
  }

  if (!endVertex || typeof endVertex !== "string" || !graph[endVertex]) {
    return [];
  }

  let visited = new Set();
  let queue = [startVertex];
  let prev = {};

  visited.add(startVertex);

  while (queue.length > 0) {
    let currentVertex = queue.shift();

    if (currentVertex === endVertex) {
      let path = [];
      let step = endVertex;

      while (step) {
        path.unshift(step);
        step = prev[step];
      }

      return path;
    }

    for (let neighbor of graph[currentVertex] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        prev[neighbor] = currentVertex;
      }
    }
  }

  // Если не удалось найти путь
  return [];
};
