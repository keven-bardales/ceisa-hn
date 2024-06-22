"use server";

import Nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { NewEmailCustomer } from "@/root/emails/new-email";

export default async function newQuoteAction(values: any): Promise<any> {
  try {
    console.log(values);
    sendEmail(values);
    return {
      message: "Correo enviado muchas gracias por contactarnos",
    };
  } catch (error) {
    return {
      message: "Error al enviar el correo",
    };
  }
}

async function sendEmail(data: any) {
  const emailHtml = render(<NewEmailCustomer clientName={data.name} companyName="Ceisa Honduras" quotedProducts={data?.quotedProducts} />);

  try {
    const transportEmail = Nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    transportEmail.sendMail({
      from: `"Ceisa Honduras" <${process.env.SMTP_USER}>`,
      to: [data.email, process.env.SEND_EMAIL_NOTIFICATIONS_TO],
      subject: "Mensaje de bienvenida",
      html: emailHtml,
    });
  } catch (error) {}
}
