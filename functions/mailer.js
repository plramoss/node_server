// functions/mailer.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Verificar se as variáveis de ambiente estão carregadas corretamente
console.log('EMAIL:', process.env.EMAIL);
console.log('PASS:', process.env.PASS);

let transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

export async function sendEmail(subject, text, recipients) {
  let mailOptions = {
    from: process.env.EMAIL,
    to: recipients.join(', '),
    subject: 'Exame',
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