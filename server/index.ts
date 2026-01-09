import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Determine static path based on environment and file existence
  // In Hostinger/Production, files might be in ../public relative to dist/index.js
  // or in ./public if copied there.
  let staticPath = path.resolve(__dirname, "public");
  
  if (!fs.existsSync(staticPath)) {
    // Fallback for local dev or different build structure
    staticPath = path.resolve(__dirname, "..", "public");
  }
  
  if (!fs.existsSync(staticPath)) {
     // Another fallback for standard vite build output structure
     staticPath = path.resolve(__dirname, "..", "dist", "public");
  }

  console.log(`Serving static files from: ${staticPath}`);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send("Index file not found. Please check build output.");
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
