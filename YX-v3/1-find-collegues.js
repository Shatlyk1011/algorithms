function solution({ graph, startVertex, endVertex }) {
  const graphLength = Object.keys(graph).length;

  if (graphLength > 50 || !(startVertex in graph) || !(endVertex in graph)) {
    return [];
  }

  if (startVertex === endVertex) return [startVertex];

  const queue = [[startVertex]];
  const visited = new Set();

  while (queue.length > 0) {
    const path = queue.shift();
    const currentVertex = path[path.length - 1];

    if (visited.has(currentVertex)) continue;
    visited.add(currentVertex);

    for (const neighbor of graph[currentVertex] || []) {
      if (path.includes(neighbor)) continue;

      const newPath = [...path, neighbor];

      if (neighbor === endVertex) {
        return newPath;
      }

      queue.push(newPath);
    }
  }

  return [];
}
const input = {
  graph: {
    Александра: ["Борис"],
    Борис: ["Александра", "Светлана"],
    Светлана: ["Борис"],
  },
  startVertex: "Александра",
  endVertex: "Светлана",
};

const input2 = {
  graph: {
    Артемий: ["Бронислав", "Дементий"],
    Бронислав: ["Артемий", "Софья", "Дементий"],
    Софья: ["Бронислав"],
    Дементий: ["Артемий", "Бронислав"],
    Фаина: ["Гаврила"],
    Гаврила: ["Фаина"],
  },
  startVertex: "Артемий",
  endVertex: "Фаина",
};

console.log(solution(input));
console.log(solution(input2));

module.exports = function solution({ graph, startVertex, endVertex }) {
  if (!graph || typeof graph !== "object" || !Object.keys(graph).length) {
    return [];
  }

  if (!(startVertex in graph) || !(endVertex in graph)) {
    return [];
  }

  if (startVertex === endVertex) {
    return []; //вот тут
  }

  const queue = [startVertex];
  const visited = new Set();
  const parent = {};

  visited.add(startVertex);

  while (queue.length > 0) {
    const current = queue.shift();

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent[neighbor] = current;
        queue.push(neighbor);

        if (neighbor === endVertex) {
          const path = [];
          let step = endVertex;

          while (step) {
            path.push(step);
            step = parent[step];
          }

          return path.reverse();
        }
      }
    }
  }

  return [];
};
