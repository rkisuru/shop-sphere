import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getRecommendations,
  toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middlewares/auth.middleware.js";

const productRouter = Router();

productRouter.get("/", protectRoute, adminRoute, getAllProducts);

productRouter.get("/featured", getFeaturedProducts);

productRouter.get("/recommendations", getRecommendations);

productRouter.post("/", protectRoute, adminRoute, createProduct);

productRouter.delete("/:id", protectRoute, adminRoute, deleteProduct);

productRouter.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);

productRouter.get("/category/:category", getProductsByCategory);

export default productRouter;
