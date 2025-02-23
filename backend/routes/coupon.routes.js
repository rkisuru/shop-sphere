import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import { getCoupon } from "../controllers/coupon.controller";

const couponRouter = Router();

couponRouter.get("/", protectRoute, getCoupon);
couponRouter.get();

export default couponRouter;
