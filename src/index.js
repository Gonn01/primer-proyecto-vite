import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { router } from "./routes/users.routes.js";
import mongoose from "./database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", router);

// Serve the static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Catch-all route to serve the index.html file for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Starting server
app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
