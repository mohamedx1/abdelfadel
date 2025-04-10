"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Mail,
  Loader2,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import emailjs from "@emailjs/browser";
import { Badge } from "../../components/ui/badge";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const serviceId = "service_34f1khp";
      const templateId = "template_on5xg6n";
      const publicKey = "1AD23Bykc-P_yqW3e";
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSuccess(true);
      reset(); // Clear the form
    } catch (error) {
      console.error("Error sending email:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='container py-24 space-y-8'>
      <div className='flex flex-col items-center text-center space-y-4'>
        <Badge variant='outline'>Get In Touch</Badge>
        <h2 className='text-3xl md:text-4xl font-bold'>Let's Work Together</h2>
        <p className='text-muted-foreground max-w-[700px]'>
          Have a project in mind? I'd love to hear about it. Send me a message
          and let's create something amazing.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start  mx-auto'>
        <Card>
          <CardContent className='pt-6'>
            {isSuccess && (
              <div className='mb-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md flex items-center'>
                <CheckCircle className='h-5 w-5 mr-2 flex-shrink-0' />
                <span>
                  Message sent successfully! Thank you for reaching out.
                </span>
              </div>
            )}

            {isError && (
              <div className='mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md flex items-center'>
                <AlertCircle className='h-5 w-5 mr-2 flex-shrink-0' />
                <span>
                  Failed to send message. Please try again or contact me
                  directly via email.
                </span>
              </div>
            )}

            <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label htmlFor='name' className='text-sm font-medium'>
                    Name
                  </label>
                  <Input
                    id='name'
                    placeholder='Your name'
                    {...register("name", { required: "Name is required" })}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className='text-sm text-destructive'>
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className='space-y-2'>
                  <label htmlFor='email' className='text-sm font-medium'>
                    Email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Your email'
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className='text-sm text-destructive'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor='subject' className='text-sm font-medium'>
                  Subject
                </label>
                <Input
                  id='subject'
                  placeholder='Project inquiry'
                  {...register("subject", { required: "Subject is required" })}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className='text-sm text-destructive'>
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div className='space-y-2'>
                <label htmlFor='message' className='text-sm font-medium'>
                  Message
                </label>
                <Textarea
                  id='message'
                  placeholder='Tell me about your project...'
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters",
                    },
                  })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className='text-sm text-destructive'>
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                className='w-full cursor-pointer '
                type='submit'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Mail className='ml-2 h-4 w-4' />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className='space-y-6'>
          <div>
            <h3 className='text-xl font-bold mb-2'>Contact Information</h3>
            <p className='text-muted-foreground'>
              Feel free to reach out to me through any of these channels.
            </p>
          </div>
          <div className='flex flex-col gap-10'>
            <a href='mailto:mohamedaliabdelfadil@gmail.com'>
              <div className='flex items-start gap-4 cursor-pointer'>
                <Mail className='h-5 w-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <p className='text-muted-foreground'>
                    mohamedaliabdelfadil@gmail.com
                  </p>
                </div>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/mohamed-ali-266b521b2/'
              target='_blank'
            >
              <div className='flex items-start gap-4 cursor-pointer'>
                <Linkedin className='h-5 w-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-medium'>LinkedIn</h4>
                  <p className='text-muted-foreground'>
                    linkedin.com/in/mohamed-ali-266b521b2/
                  </p>
                </div>
              </div>
            </a>
            <a href='https://github.com/mohamedx1' target='_blank'>
              <div className='flex items-start gap-4'>
                <Github className='h-5 w-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-medium'>GitHub</h4>
                  <p className='text-muted-foreground'>github.com/mohamedx1</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
