import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rajsingh18904:MLRQ5vOqWiXcQp3g@cluster0.rg1iilq.mongodb.net/food-del"
    )
    .then(() => console.log("DBConnected"));
};
