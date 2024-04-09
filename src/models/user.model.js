import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    last_loggedin_at: {
      type: Number,
      default: () => Math.ceil(new Date().getTime() / 1000),
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

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
