
/* eslint-disable no-undef */
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `${firstName} ${lastName} <${email}>`,
    to: process.env.EMAIL_USER, // Send to your email
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({
        code: 200,
        message: 'Email sent successfully',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        code: 500,
        message: 'Failed to send message',
      }),
    };
  }
};



/* eslint-enable no-undef */


