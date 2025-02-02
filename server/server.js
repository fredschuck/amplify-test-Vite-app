import dotenv from "dotenv";
import express from "express";
import route from "./route.js";
import cors from "cors";
import bodyParser from "body-parser";
// import path from "path";
// import { fileURLToPath } from "url";

dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// CORS
// app.use(cors());
// app.use(cors({ origin: "*" }));
app.use(
  cors({
    origin: process.env.API_URL || "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(bodyParser.json()); // Probably not needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });

app.use("/api/", route);

if (process.env.NODE_ENV === "development") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
