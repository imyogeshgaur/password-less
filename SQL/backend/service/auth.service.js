import Auth from "../model/auth.entity.js";
import jsonwebtoken from "jsonwebtoken";
import { resolve } from "path"
import { config } from "dotenv"
import sendMail from "../helper/auth.helper.js";
import { v1 } from "uuid";
config({ path: resolve("../backend/.env") })


class AuthService {
    constructor() {
        this.auth = Auth;
    }

    async signUpUser(email, name) {
        try {
            const userId = v1();
            const newUser = await this.auth.create({
                userId,
                email,
                name
            })
            return newUser;
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
    async loginUser(email) {
        try {
            const isExist = await this.auth.findOne({
                where: {
                    email
                }
            });
            if (isExist) {
                const token = jsonwebtoken.sign({ userId: isExist.userId }, process.env.JWT_SECRET, { expiresIn: 60000 })
                const message = await sendMail(token, email, isExist.name);
                return { message };
            } else {
                return { message: "Check email and Login Again !!!" }
            }
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
    async verify(userId) {
        try {
            const userToFind = await this.auth.findOne({
                where: {
                    userId
                }
            });
            return userToFind
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
    async updateUser(data) {
        try {
            const {userId,name,email} = data;
            const update = await this.auth.update({
                email,
                name
            }, {
                where: {
                    userId
                }
            })
            return update
        } catch (error) {
            console.log("Auth's Service Error : ", error)
        }
    }
}

export default AuthService