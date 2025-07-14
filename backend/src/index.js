import dotend from "dotenv";
import express from "express";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotend.config();

const app = express();

const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running at Port 5001`);
  connectDB();
});
