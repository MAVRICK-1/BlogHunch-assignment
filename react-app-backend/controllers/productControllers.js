const { model } = require("mongoose");
const ProductModel = require("../models/productModels");
const fileFsystem = require("fs");

// add product
const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const product = new ProductModel({
    name: req.body.name,
    description: req.body.description,
    company: req.body.company,
    price: req.body.price,
    image: image_filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: "product added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

module.exports = addProduct;
