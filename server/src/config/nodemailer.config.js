import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: process.env.OWNER_GMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD
    }
})

export default transporter;