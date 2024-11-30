/* eslint-disable no-undef */
const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body);

    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid email address' }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app-specific password
      },
    });

    const mailOptions = {
      from: `Newsletter Subscription <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email address
      subject: 'New Newsletter Subscription',
      html: `<p>A user has subscribed to your newsletter:</p>
             <p>Email: ${email}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscription successful!' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error. Please try again.' }),
    };
  }
};
/* eslint-enable no-undef */
