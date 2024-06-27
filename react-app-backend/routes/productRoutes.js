const express = require("express");
const addProduct = require("../controllers/productControllers");
const multer = require("multer");

const productRouter = express.Router();

// image upload
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRouter.post("/add", upload.single("image"), addProduct);


module.exports = productRouter;
