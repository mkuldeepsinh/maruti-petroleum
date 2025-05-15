// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message required" });
  }

  // Configure your Gmail transport (make sure 2FA + App Password is set up)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kuldeepsinhrajpoot9@gmail.com",
      pass: "qxnx hmro avos zepc", // Your 16-char Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `Maruti Petroleum <kuldeepsinhrajpoot9@gmail.com>`,
      to: "kuldeepsinhrajpoot9@gmail.com",
      subject: `New Suggestion from ${name}`,
      text: message,
    });

    console.log(`Email sent successfully from ${name}`);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
