const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      enum: ["INR", "USD"],
      default: "INR",
    },
    sizes: {
      type: Array,
      default: [],
    },
    created_at: {
      type: Number,
      default: () => Math.ceil(new Date().getTime() / 1000),
    },
    updated_at: {
      type: Number,
      default: () => Math.ceil(new Date().getTime() / 1000),
    },
  },
  {
    timestamps: true,
  },
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
