import dotenv from "dotenv";
import express from "express";
import route from "routes.js";
// import path from "path";
// import { fileURLToPath } from "url";

dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
