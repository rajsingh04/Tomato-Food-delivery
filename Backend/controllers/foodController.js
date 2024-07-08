import foodModel from "../models/foodModels.js";
import fs from "fs";
import { diskStorage } from "multer";

//add food item
const addFood = async (req, res) => {
  let image_fileName = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_fileName,
  });
  try {
    await food.save();
    res.json({ success: true, message: "food added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Error" });
  }
};

//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "error" });
  }
};

//remove food item
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "food removed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "error" });
  }
};
export { addFood, listFood, removeFood };
