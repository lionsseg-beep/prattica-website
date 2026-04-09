// server/index.ts
import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
async function startServer() {
  const app = express();
  const server = createServer(app);
  let staticPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(staticPath)) {
    staticPath = path.resolve(__dirname, "..", "public");
  }
  if (!fs.existsSync(staticPath)) {
    staticPath = path.resolve(__dirname, "..", "dist", "public");
  }
  console.log(`Serving static files from: ${staticPath}`);
  app.use(express.static(staticPath));
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Index file not found. Please check build output.");
    }
  });
  const port = process.env.PORT || 3e3;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}
startServer().catch(console.error);
