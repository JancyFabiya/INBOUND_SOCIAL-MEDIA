const nodemailer=require('nodemailer')


const generateOTP = () => {
    let otp = ''
    for (let i = 0; i <= 3; i++) {
        const randVal = Math.round(Math.random() * 9)
        otp = otp + randVal
    }
    return otp;
}

const mailTransport=()=>nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        port: 465,
        auth: {
            user:process.env.MAILTRAP_USERNAME,
            pass:process.env.MAILTRAP_PASSWORD
        }
    });


module.exports = { generateOTP, mailTransport};