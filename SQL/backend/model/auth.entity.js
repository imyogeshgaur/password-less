import { Sequelize,DataTypes} from "sequelize"
import { resolve } from "path"
import { config } from "dotenv"
config({ path: resolve("../backend/.env") })

const sequelize = new Sequelize(process.env.DB_URI)

const Auth = sequelize.define('Auth', {
    userId: {
        type: DataTypes.UUID,
        primaryKey:true,
        autoIncrementIdentity:true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    }
})

Auth.sync({alter:true})

export default Auth;