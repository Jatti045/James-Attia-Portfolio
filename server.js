require("dotenv").config({ path: ".git/.env" });
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received form data:", req.body);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Contact form submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("An error occurred while sending the email.");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Email sent successfully.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
