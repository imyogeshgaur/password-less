import decodeUser from "../helper/decodeUser.helper.js";
import AuthService from "../service/auth.service.js";

class AuthController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.service = new AuthService();
    }
    async signUpUser() {
        try {
            const email = this.req.body.email;
            const name = this.req.body.name
            await this.service.signUpUser(email, name);
            await this.res.status(200).send({ message: "Registered Successfully !!!" })
        } catch (error) {
            console.log("Auth's Controller : Internal Server Error !!!")
        }
    }
    async loginUser() {
        try {
            const email = this.req.body.email;
            const message = await this.service.loginUser(email);
            await this.res.status(200).send(message)
        } catch (error) {
            console.log("Auth's Controller : Internal Server Error !!!")
        }
    }

    async verifyUser() {
        try {
            const token = this.req.query.token;
            const userId = decodeUser(token);
            const user = await this.service.verify(userId);
            return this.res.status(200).send(user);
        } catch (error) {
            console.log("Auth's Controller : Internal Server Error !!!")
        }
    }

    async updateUser() {
        try {
            const data = this.req.body;
            const update = await this.service.updateUser(data);
            if (update[0]) {
                return this.res.status(200).send({ message: "Details Updated !!!" })
            } else {
                return this.res.status(200).send({ message: "Details Not Updated !!!" })
            }
        } catch (error) {
            console.log("Auth's Controller : Internal Server Error !!!")
        }
    }
}

export default AuthController