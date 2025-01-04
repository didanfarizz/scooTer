import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import PaymentRoutes from "./routes/PaymentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/payment", PaymentRoutes);
app.use("/api/user", userRoutes);

export default app;
