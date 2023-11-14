"use server";

import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export async function handleFeedbackSubmit(feedback: string, slug: string) {
  const message = `The feedback for blog ${slug} received as ${feedback}`;
  let info = await transporter.sendMail({
    from: "Blog Website",
    to: [`${process.env.AUTHOR_EMAIL}`],
    subject: "Feedback regarding blog post",
    text: message,
  });
  console.log("Message sent: %s", info.messageId);
}
