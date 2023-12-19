'use server'

import { ContactFormProps } from '@/app/(routes)/contact/_components/ContactForm'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (values: ContactFormProps) => {
  const { name, email, phone, message } = values
  console.log('Running on server and the', name)

  resend.emails.send({
    from: 'Contact <sales@digitaldesk.ae>',
    to: 'melwinafs@gmail.com',
    subject: 'Message from contact form',
    text: message,
  })
}
