import express from "express";
import cors from "cors";
import { connectDB } from "./Config/db.js";
import foodRouter from "./Routes/foodRoute.js";
import userRouter from "./Routes/UserRoute.js";
import cartRouter from "./Routes/cartRoute.js";
import "dotenv/config";
import orderRouter from "./Routes/orderRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("4000 working");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
