const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mod = 1000;

function kingPaths(N, M) {
  const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

  dp[0][0] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) continue;

      if (i > 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j]) % mod;
      }

      if (j > 0) {
        dp[i][j] = (dp[i][j] + dp[i][j - 1]) % mod;
      }

      if (i > 0 && j > 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % mod;
      }
    }
  }

  return dp[N - 1][M - 1];
}

rl.on("line", (line) => {
  const [N, M] = line.split(" ").map(Number);
  kingPaths(N, M);
  rl.close();
});

module.exports = kingPaths;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const mod = 1000;

function kingPaths(N, M) {
  const dp = Array.from({ length: N }, () => Array.from({ length: M }, () => [0, 0]));

  const startColor = (0 + 0) % 2;
  dp[0][0][startColor] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) continue;

      const currentColor = (i + j) % 2;

      if (i > 0) {
        dp[i][j][currentColor] += dp[i - 1][j][1 - currentColor];
        dp[i][j][currentColor] %= mod;
      }

      if (j > 0) {
        dp[i][j][currentColor] += dp[i][j - 1][1 - currentColor];
        dp[i][j][currentColor] %= mod;
      }

      if (i > 0 && j > 0) {
        dp[i][j][currentColor] += dp[i - 1][j - 1][1 - currentColor];
        dp[i][j][currentColor] %= mod;
      }
    }
  }

  return (dp[N - 1][M - 1][0] + dp[N - 1][M - 1][1]) % mod;
}

rl.on("line", (line) => {
  const [N, M] = line.split(" ").map(Number);
  const result = countPaths(N, M);
  console.log(result);
  rl.close();
});

function kingPaths(N, M) {
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 3 }, () => Array(2).fill(0)))
  );

  dp[0][0][1][0] = 1;
  dp[0][0][0][1] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i === 0 && j === 0) continue;

      const currentColor = (i + j) % 2;

      if (i > 0) {
        for (let k = 0; k < 3; k++) {
          dp[i][j][1][currentColor] += dp[i - 1][j][k][(currentColor + 1) % 2];
          dp[i][j][k === 2 ? 2 : k + 1][currentColor] += dp[i - 1][j][k][currentColor];
        }
      }

      if (j > 0) {
        for (let k = 0; k < 3; k++) {
          dp[i][j][1][currentColor] += dp[i][j - 1][k][(currentColor + 1) % 2];
          dp[i][j][k === 2 ? 2 : k + 1][currentColor] += dp[i][j - 1][k][currentColor];
        }
      }

      if (i > 0 && j > 0) {
        for (let k = 0; k < 3; k++) {
          dp[i][j][1][currentColor] += dp[i - 1][j - 1][k][(currentColor + 1) % 2];
          dp[i][j][k === 2 ? 2 : k + 1][currentColor] += dp[i - 1][j - 1][k][currentColor];
        }
      }

      for (let k = 0; k < 3; k++) {
        dp[i][j][k][0] %= mod;
        dp[i][j][k][1] %= mod;
      }
    }
  }

  let totalPaths = 0;
  for (let k = 0; k < 3; k++) {
    totalPaths += dp[N - 1][M - 1][k][0] + dp[N - 1][M - 1][k][1];
  }

  return totalPaths % mod;
}

module.exports = function solve() {
  rl.on("line", (line) => {
    const [N, M] = line.split(" ").map(Number);
    const result = kingPaths(N, M);
    console.log(result);
    rl.close();
  });
};
/////////////////////////////

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dp = [];
const mod = 1000;

function kingPaths(n, m) {
  if (n === 0 || m === 0) return 1;
  if (dp[n][m] !== undefined) return dp[n][m];
  let res = 0;
  if (n > 0) res = (res + kingPaths(n - 1, m)) % mod;
  if (m > 0) res = (res + kingPaths(n, m - 1)) % mod;
  if (n > 0 && m > 0 && ((n % 2 === 0 && m % 2 === 1) || (n % 2 === 1 && m % 2 === 0))) {
    res = (res - kingPaths(n - 1, m - 1) + mod) % mod;
  }
  dp[n][m] = res;
  return res;
}

rl.on("line", (line) => {
  const [n, m] = line.split(" ").map(Number);
  dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(undefined));
  console.log(kingPaths(n, m));
  rl.close();
});

module.exports = kingPaths;
