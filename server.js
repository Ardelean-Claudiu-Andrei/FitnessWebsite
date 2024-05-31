const express = require("express");
const stripe = require("stripe")("sk_test_your_secret_key");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fs = require("fs");
require("dotenv").config({ path: "./src/credential.env" }); // Load environment variables from credential.env

const app = express();
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1PMVaGP1lVvnCIVGGPI0LQRi", // Use the new price ID
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url:
        "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = "whsec_your_webhook_secret";

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerEmail = session.customer_email;
      sendEmailWithAttachment(customerEmail);
    }

    res.json({ received: true });
  }
);

const sendEmailWithAttachment = (receiverEmail) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: receiverEmail,
    subject: "Confirmarea Plății și Documentul Atașat",
    text: "Vă mulțumim pentru plata efectuată. Atașat veți găsi documentul solicitat.",
    attachments: [
      {
        filename: "TrainWithAndrew.pdf",
        path: "./src/course/TrainWithAndrew.pdf",
        contentType: "application/pdf",
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });
};

app.listen(4242, () => console.log("Node server listening on port 4242!"));
