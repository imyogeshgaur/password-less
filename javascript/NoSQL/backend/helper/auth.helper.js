import { createTransport } from "nodemailer"
import { resolve } from "path"
import { config } from "dotenv"
config({ path: resolve("../backend/.env") })

const sendMail = async (token, email) => {
    try {
        const myTransPort = new createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: process.env.SENDER_MAIL,
                pass: process.env.SENDER_PASSWORD
            },
        })

        const info = await myTransPort.sendMail({
            from: process.env.SENDER_MAIL,
            to: email,
            subject: "Log In Link",
            html: `
            <html>
            <head>
            </head>
            <body>
                Dear user, thank you for Registeration.<br>
                This is Your Login URL: <br>
                http://${process.env.BASE_URL}/auth/verify?token=${token}
                <br>
                Thanks and Regards
                <br>
                Team Yogesh Gaur
            </body>
            </html>
            `
        })

        console.log("Mail Send Successfully !!!", info.messageId)
        return "Mail Send Successfully !!!";
    } catch (error) {
        console.log("Error From Mail Side !!!", error)
    }
}

export default sendMail;