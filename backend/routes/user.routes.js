import { Router } from "express";
import { getUserProfile } from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/profile", protectRoute, getUserProfile);

export default userRouter;
