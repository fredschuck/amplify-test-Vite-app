import dotenv from "dotenv";
import express from "express";
import route from "./route.js";
import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";

dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app = express();

// CORS
app.use(cors());
/*** Allowing specific methods: If you need to allow specific HTTP methods (e.g., GET, POST, etc.), you can specify that in the cors() options: */
app.use(
  cors({
    methods: ["GET", "POST", "PUT"],
  })
);
/*** Allowing credentials: If your app involves cookies or HTTP authentication (e.g., JWT tokens), you'll need to explicitly allow credentials: */
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true, // allows cookies and headers
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "../client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
// });

app.use("/api/", route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
