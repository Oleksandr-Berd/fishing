"use strict";
const nodemailer = require("nodemailer");

async function sendEmail({ name, email, text }) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const emailBody = `<h1>You recieved a letter from ${name}</h1>
<p>His contact email is ${email}</p>
<p>He sent a message with the next text:${text}</p>`;
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "alex.berd86@gmail.com", // list of receivers
    subject:
      "The first space conference 2023. List of speakers: Vsevolodych, Vasiok, Lesch", // Subject line
    text: text, // plain text body
    html: emailBody, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  return true;
}

module.exports = sendEmail;
