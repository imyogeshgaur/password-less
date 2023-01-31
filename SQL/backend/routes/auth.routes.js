import { Router } from "express";
import AuthController from "../controller/auth.controller.js";
const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    try {
        const authController = new AuthController(req, res);
        await authController.signUpUser();
    } catch (error) {
        console.log("Gloabal Auth's Error !!!", error)
    }
})

authRouter.post("/login", async (req, res) => {
    try {
        const authController = new AuthController(req, res);
        authController.loginUser();
    } catch (error) {
        console.log("Gloabl Auth's Error!!!", error)
    }
})

authRouter.get("/verify", async (req, res) => {
    try {
        const authController = new AuthController(req, res);
        authController.verifyUser();
    } catch (error) {
        console.log("Gloabal Auth's Error !!!", error)
    }
})
authRouter.put("/update", async (req, res) => {
    try {
        const authController = new AuthController(req, res);
        authController.updateUser();
    } catch (error) {
        console.log("Gloabal Auth's Error !!!", error)
    }
})

export default authRouter