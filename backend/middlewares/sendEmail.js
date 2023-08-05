const nodeMailer = require('nodemailer')

exports.sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "951059c7e3845a",
    pass: "20249ce6034793"
  }
    })

    const mailOptions = {
        from: process.env.SMPT_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transporter.sendMail(mailOptions)
}