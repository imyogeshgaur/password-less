import { Schema, model } from "mongoose";

const authSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Auth = model("Auth", authSchema);
export default Auth;