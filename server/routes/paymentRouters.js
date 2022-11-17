import Express from "express";
import { checkout, paymentVerification } from "../controllers/paymentControllers.js";

const router = Express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;
