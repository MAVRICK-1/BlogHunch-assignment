const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
  },

  describtion: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    enum: {
      values: ["Apple", "Samsung", "Nikkon", "JBL", "SONY"],
      message: `{VALUE} is not supported`,
    },
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },

  image: {
    type: String,
    required: false,
  },
});

const ProductModel = mongoose.models.Product || mongoose.model("Product", ProductSchema);
module.exports = ProductModel;