import {Sequelize} from "sequelize"
import { resolve } from "path"
import { config } from "dotenv"
config({ path: resolve("../backend/.env") })

const sequelize = new Sequelize(process.env.DB_URI)

const connectDb = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database Connected Successfully !!!')
    } catch (error) {
        console.log("Some Error At Database Connectibity : ", error)
    }
}

export default connectDb