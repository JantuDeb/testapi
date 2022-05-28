import express from "express";
import { signUp } from "../controller/user.controller.js";
const router = express.Router()

router.route("/user").post(signUp)

export default router;
