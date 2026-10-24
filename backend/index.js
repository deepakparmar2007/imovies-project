const { start } = require("./server");

start().catch((error) => {
  console.error("Failed to start iMovies API:", error);
  process.exitCode = 1;
});