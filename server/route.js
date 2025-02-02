import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.post("/calc", controller.calculate);
router.get("/api/calc", (req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
});

export default router;
