const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Route to send email
app.post('/send-email', async (req, res) => {
  const { email, subject, text } = req.body;

  const msg = {
    to: email,
    from: 'swapnil.output@gmail.com', // Use your verified sender email here
    subject: subject,
    text: text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
