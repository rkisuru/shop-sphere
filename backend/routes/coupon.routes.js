import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getCoupon, validateCoupon } from "../controllers/coupon.controller.js";

const couponRouter = Router();

couponRouter.get("/", protectRoute, getCoupon);
couponRouter.get("/validate", protectRoute, validateCoupon);

export default couponRouter;
