/** @format */

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Function to Send Email
function sendEmail(email, subject, message) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mail_config = {
      from: 'ephraimimhagbe@gmail.com',
      to: email,
      subject,
      text: message,
    };

    transporter.sendMail(mail_config, function (error, info) {
      if (error) {
        console.error('Error:', error);
        return reject({ message: 'An error occurred' });
      }
      console.log('Email Sent:', info.response);
      return resolve({ message: 'Email sent successfully' });
    });
  });
}

// API Route
app.get('/', (req, res) => {
  const { email, subject, message } = req.query;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  sendEmail(email, subject, message)
    .then((response) => res.json(response))
    .catch((error) => res.status(500).json(error));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
