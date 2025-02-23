import { Router } from "express";
import {
  addToCart,
  getCartProducts,
  removeAllFromCart,
} from "../controllers/cart.controller";
import { protectRoute } from "../middlewares/auth.middleware";

const cartRouter = Router();

cartRouter.get("/", protectRoute, getCartProducts);
cartRouter.post("/", protectRoute, addToCart);
cartRouter.delete("/", protectRoute, removeAllFromCart);
cartRouter.put("/:id", protectRoute, updateQuantity);

export default cartRouter;
