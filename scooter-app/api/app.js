import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import PaymentRoutes from "./routes/PaymentRoutes.js";

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/payment", PaymentRoutes);

export default app;
