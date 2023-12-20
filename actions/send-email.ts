"use server";

import { ContactFormProps } from "@/app/(routes)/contact/_components/ContactForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: ContactFormProps) => {
  const { name, email, phone, message } = values;
  console.log("Running on server and the", name);

  try {
    await resend.emails.send({
      from: `${name} <sales@digitaldesk.ae>`,
      reply_to: email,
      to: "melwinafs@gmail.com",
      cc: "digitaldeskpc@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    });
  } catch (e) {
    console.log(e);
  }
};
