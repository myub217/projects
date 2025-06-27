import express from "express";

async function main() {
  try {
    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.send("Hello World from Express + ES Modules!");
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Error during server startup:", err);
  }
}

main();