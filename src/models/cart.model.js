import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    product_id: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
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

const CartModel = mongoose.model("cart", cartSchema);

export default CartModel;
