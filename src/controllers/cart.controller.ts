import { Request, Response } from "express";
import CartModel from "../models/cart.model"
import ProductModel from "../models/product.model"
import UserModel from "../models/user.model"

const addItemToCartController = async (req: any, res: any) => {
  const productId = req.body?.productId;
  const userId = req.params?.userId;

  console.log({ productId, userId })

  if (!userId) return res.status(400).json({
    success: false,
    message: "Invalid user id received"
  })

  const userDetails = await UserModel.findById(userId);

  if(!userDetails) return res.status(400).json({
    success: false,
    message: "User not found"
  })

  if (!productId) return res.status(400).json({
    success: false,
    message: "Invalid product id received"
  })

  const productDetails = await ProductModel.findById(productId)

  if (!productDetails) return res.status(400).json({
    success: false,
    message: "Product not found"
  })

  const cartDetails = await CartModel.findOne({
    product_id: productId,
    user_id: userId
  })

  if (cartDetails) {
    cartDetails.quantity += 1;
    await cartDetails.save();
    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      data: cartDetails
    })
  }

  const newCart = await CartModel.create({
    product_id: productId,
    user_id: userId,
    quantity: 1
  })

  return res.status(200).json({
    success: true,
    message: "Item added to cart",
    data: newCart
  })
}

const getAllCartItemsController = async (req: Request, res: Response) => {
  const userId = req.params?.userId;

  if (!userId) return res.status(400).json({
    success: false,
    message: "Invalid user id received"
  })

  const userDetails = await UserModel.findOne({
    _id: userId
  })

  if (!userDetails) return res.status(400).json({
    success: false,
    message: "User not found"
  })

  const cartItems = await CartModel.find({
    user_id: userId
  })

  return res.status(200).json({
    success: true,
    message: "Cart items fetched successfully",
    data: cartItems
  })
}

export {
  addItemToCartController,
  getAllCartItemsController
}