import express from "express";
import { signin } from "../controller/auth.controller.js";

const router = express.Router();

router.get("/signin", signin);

export default router;
