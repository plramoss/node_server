import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('EMAIL:', process.env.EMAIL);
console.log('PASS:', process.env.PASS);

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

export async function sendEmail(subject, text) {
  let mailOptions = {
    from: process.env.EMAIL,
    to: ["ju96.dev@gmail.com", "pmr13.dev@gmail.com"],
    subject: subject,
    text: text
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('Erro ao enviar email:', error);
    } else {
      console.log('Email enviado:', info.response);
    }
  })
}