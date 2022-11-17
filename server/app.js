import Express from "express";
import { config } from "dotenv";
import paymentRouters from "./routes/paymentRouters.js";
import cors from "cors";

config({ path: "./config/config.env" });

export const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/api", paymentRouters);


app.use("/api/getkey",(req,res)=>res.status(200).json({key: process.env.RAZORPAY_API_KEY}))
