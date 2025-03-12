const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [n, m, ...connections] = input.trim().split(/\s+/).map(Number);

  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < m; i++) {
    const a = connections[i * 2];
    const b = connections[i * 2 + 1];
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = Array(n + 1).fill(false);

  function dfs(v) {
    visited[v] = true;
    let count = 1;
    for (const neighbor of graph[v]) {
      if (!visited[neighbor]) {
        count += dfs(neighbor);
      }
    }
    return count;
  }

  const result = dfs(1);

  console.log(result);
}

let input = "";
rl.on("line", (line) => {
  input += line + "\n";
});

rl.on("close", () => {
  solution(input);
});

module.exports = solution;

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const graph = new Map();

// function addEdge(a, b) {
//   if (!graph.has(a)) graph.set(a, []);
//   if (!graph.has(b)) graph.set(b, []);
//   graph.get(a).push(b);
//   graph.get(b).push(a);
// }

// function solution(node, visited) {
//   visited.add(node);
//   let count = 1;

//   for (const neighbor of graph.get(node) || []) {
//     if (!visited.has(neighbor)) {
//       count += solution(neighbor, visited);
//     }
//   }

//   return count;
// }

// rl.on("line", (line) => {
//   const firstLine = line.split(" ").map(Number);
//   const n = firstLine[0];
//   const m = firstLine[1];

//   const visited = new Set();

//   let edgesRead = 0;
//   rl.on("line", (line) => {
//     const [a, b] = line.split(" ").map(Number);
//     addEdge(a, b);
//     edgesRead += 1;
//     if (edgesRead === m) {
//       const totalCount = solution(1, visited);
//       console.log(totalCount);
//       rl.close();
//     }
//   });
// });

// module.exports = solution;
