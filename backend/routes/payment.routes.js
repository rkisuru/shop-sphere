import { Router } from "express";
import { protectedRoute } from "../middlewares/auth.middlewares.js";
import {
  checkoutSuccess,
  createCheckoutSession,
} from "../controllers/payment.controller.js";

const paymentRouter = Router();

paymentRouter.post(
  "/create-checkout-session",
  protectedRoute,
  createCheckoutSession
);

paymentRouter.post("/checkout-success", protectedRoute, checkoutSuccess);

export default paymentRouter;
