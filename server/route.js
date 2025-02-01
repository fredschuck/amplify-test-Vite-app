import express from "express";
import * as controller from "./controller.js";

const router = express.Router();

router.post("/calc", controller.calculate);

export default router;
