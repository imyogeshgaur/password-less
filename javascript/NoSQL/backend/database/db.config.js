import { connect,set } from "mongoose";
import { resolve } from "path"
import { config } from "dotenv"
config({ path: resolve("../backend/.env") })

const connectDb = () => {
    try {
        set("strictQuery",false);
        connect(process.env.DB_URI);
        console.log('Database Connected Successfully !!!')
    } catch (error) {
        console.log("Some Error At Database Connectibity : ", error)
    }
}

export default connectDb