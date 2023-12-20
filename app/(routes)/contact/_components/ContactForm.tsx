"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/send-email";
import { useRouter } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(50),
  email: z.string().email().optional(),
  phone: z.string().min(10).max(14),
  message: z.string().min(1).max(256, "Exceed the limit"),
});

export type ContactFormProps = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormProps) {
    await sendEmail(values);

    toast.success(`Message sent successfully. We${"'"}ll respond you soon`);

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="me@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone no</FormLabel>
                <FormControl>
                  <Input placeholder="+971 12 345 6789" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message here" {...field} rows={9} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full rounded-lg p-6 font-bold">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
