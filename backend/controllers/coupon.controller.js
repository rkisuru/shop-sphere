import Coupon from "../models/coupon.model.js";

export const getCoupon = async (req, res) => {
  try {
    const user = req.user;
    const coupon = await Coupon.findone({ userId: user._id, isActive: true });
    res.json(coupon || null);
  } catch (error) {
    console.log("Error in coupon.controller.getCoupon", error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const validateCoupon = async (req, res) => {
  try {
    const { code } = req.body;
    const coupon = await Coupon.findOne({
      code: code,
      userId: req.user._id,
      isActive: true,
    });
    if (!coupon) {
      return res.status(404).json({ message: "Coupon not found" });
    }

    if (coupon.expirationDate < new Date()) {
      coupon.isActive = false;
      await coupon.save();
      return res.status(404).json({ message: "Coupon expired" });
    }

    res.json({
      message: "Coupon is valid",
      code: coupon.code,
      discountPercentage: coupon.discountPercentage,
    });
  } catch (error) {
    console.log("Error in coupon.controller.validateCoupon", error.message);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
