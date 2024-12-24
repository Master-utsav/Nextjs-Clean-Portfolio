import { sendMailForPasswordHTMLContent } from "@/constants/htmlContent";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_MAILER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_MAILER_USER,
    pass: process.env.NEXT_PRIVATE_MAILER_PASS,
  },
});

export const sendPasswordMail = async (
  email: string,
  password: string,
  provider: string,
) => {
  try {
    const domain = process.env.NEXT_PUBLIC_DOMAIN!;
    const htmlContent = sendMailForPasswordHTMLContent({
      provider,
      password,
      domain,
    });
    const mailOptions = {
      from: `"Utsav Jaiswal" <${process.env.NEXT_PUBLIC_GMAIL}>`,
      to: email,
      subject: `${provider} Authentication Successful`,
      html: htmlContent,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
