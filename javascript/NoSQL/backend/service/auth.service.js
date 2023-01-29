import Auth from "../model/auth.entity.js";
import jsonwebtoken from "jsonwebtoken";
import { resolve } from "path"
import { config } from "dotenv"
import sendMail from "../helper/auth.helper.js";
config({ path: resolve("../backend/.env") })


class AuthService {
    constructor() {
        this.auth = Auth;
    }

    async signUpUser(email, name) {
        try {
            const newUser = new this.auth({
                email,
                name
            })
            await newUser.save();
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
    async loginUser(email) {
        try {
            const isExist = await this.auth.findOne({ email });
            if (isExist) {
                const token = jsonwebtoken.sign({ userId: isExist._id }, process.env.JWT_SECRET)
                const message = await sendMail(token, email);
                return { message };
            } else {
                return { message: "Check email and Login Again !!!" }
            }
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
    async verify(_id) {
        try {
            const userToFind = await this.auth.findById(_id);
            return userToFind
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
}

export default AuthService