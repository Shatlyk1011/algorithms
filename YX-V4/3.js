function countPaths(N, M) {
  const MOD = 1000;
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => Array.from({ length: 2 }, () => Array(3).fill(0)))
  );

  const initialColor = (0 + 0) % 2;
  dp[0][0][initialColor][1] = 1;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      for (let color = 0; color < 2; color++) {
        for (let length = 1; length < 3; length++) {
          if (dp[i][j][color][length] > 0) {
            if (i + 1 < N) {
              const newColor = (i + 1 + j) % 2;
              if (newColor === color) {
                if (length < 2) {
                  dp[i + 1][j][color][length + 1] =
                    (dp[i + 1][j][color][length + 1] + dp[i][j][color][length]) % MOD;
                }
              } else {
                dp[i + 1][j][newColor][1] =
                  (dp[i + 1][j][newColor][1] + dp[i][j][color][length]) % MOD;
              }
            }
            if (j + 1 < M) {
              const newColor = (i + (j + 1)) % 2;
              if (newColor === color) {
                if (length < 2) {
                  dp[i][j + 1][color][length + 1] =
                    (dp[i][j + 1][color][length + 1] + dp[i][j][color][length]) % MOD;
                }
              } else {
                dp[i][j + 1][newColor][1] =
                  (dp[i][j + 1][newColor][1] + dp[i][j][color][length]) % MOD;
              }
            }
            if (i + 1 < N && j + 1 < M) {
              const newColor = (i + 1 + j + 1) % 2;
              if (newColor === color) {
                if (length < 2) {
                  dp[i + 1][j + 1][color][length + 1] =
                    (dp[i + 1][j + 1][color][length + 1] + dp[i][j][color][length]) % MOD;
                }
              } else {
                dp[i + 1][j + 1][newColor][1] =
                  (dp[i + 1][j + 1][newColor][1] + dp[i][j][color][length]) % MOD;
              }
            }
          }
        }
      }
    }
  }

  let result = 0;
  for (let color = 0; color < 2; color++) {
    for (let length = 1; length < 3; length++) {
      result = (result + dp[N - 1][M - 1][color][length]) % MOD;
    }
  }

  return result;
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim();
const [N, M] = input.split(" ").map(Number);
const result = countPaths(N, M);
console.log(result);
