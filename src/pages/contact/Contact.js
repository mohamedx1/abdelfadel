"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Mail, Loader2, CheckCircle, AlertCircle, Linkedin, Github, } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import emailjs from "@emailjs/browser";
import { Badge } from "../../components/ui/badge";
export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = async (data) => {
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
        }
        catch (error) {
            console.error("Error sending email:", error);
            setIsError(true);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("section", { id: 'contact', className: 'container py-24 space-y-8', children: [_jsxs("div", { className: 'flex flex-col items-center text-center space-y-4', children: [_jsx(Badge, { variant: 'outline', children: "Get In Touch" }), _jsx("h2", { className: 'text-3xl md:text-4xl font-bold', children: "Let's Work Together" }), _jsx("p", { className: 'text-muted-foreground max-w-[700px]', children: "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing." })] }), _jsxs("div", { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-start  mx-auto', children: [_jsx(Card, { children: _jsxs(CardContent, { className: 'pt-6', children: [isSuccess && (_jsxs("div", { className: 'mb-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md flex items-center', children: [_jsx(CheckCircle, { className: 'h-5 w-5 mr-2 flex-shrink-0' }), _jsx("span", { children: "Message sent successfully! Thank you for reaching out." })] })), isError && (_jsxs("div", { className: 'mb-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md flex items-center', children: [_jsx(AlertCircle, { className: 'h-5 w-5 mr-2 flex-shrink-0' }), _jsx("span", { children: "Failed to send message. Please try again or contact me directly via email." })] })), _jsxs("form", { className: 'space-y-4', onSubmit: handleSubmit(onSubmit), children: [_jsxs("div", { className: 'grid grid-cols-2 gap-4', children: [_jsxs("div", { className: 'space-y-2', children: [_jsx("label", { htmlFor: 'name', className: 'text-sm font-medium', children: "Name" }), _jsx(Input, { id: 'name', placeholder: 'Your name', ...register("name", { required: "Name is required" }), className: errors.name ? "border-destructive" : "" }), errors.name && (_jsx("p", { className: 'text-sm text-destructive', children: errors.name.message }))] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { htmlFor: 'email', className: 'text-sm font-medium', children: "Email" }), _jsx(Input, { id: 'email', type: 'email', placeholder: 'Your email', ...register("email", {
                                                                required: "Email is required",
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: "Invalid email address",
                                                                },
                                                            }), className: errors.email ? "border-destructive" : "" }), errors.email && (_jsx("p", { className: 'text-sm text-destructive', children: errors.email.message }))] })] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { htmlFor: 'subject', className: 'text-sm font-medium', children: "Subject" }), _jsx(Input, { id: 'subject', placeholder: 'Project inquiry', ...register("subject", { required: "Subject is required" }), className: errors.subject ? "border-destructive" : "" }), errors.subject && (_jsx("p", { className: 'text-sm text-destructive', children: errors.subject.message }))] }), _jsxs("div", { className: 'space-y-2', children: [_jsx("label", { htmlFor: 'message', className: 'text-sm font-medium', children: "Message" }), _jsx(Textarea, { id: 'message', placeholder: 'Tell me about your project...', rows: 5, ...register("message", {
                                                        required: "Message is required",
                                                        minLength: {
                                                            value: 10,
                                                            message: "Message should be at least 10 characters",
                                                        },
                                                    }), className: errors.message ? "border-destructive" : "" }), errors.message && (_jsx("p", { className: 'text-sm text-destructive', children: errors.message.message }))] }), _jsx(Button, { className: 'w-full cursor-pointer ', type: 'submit', disabled: isSubmitting, children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx(Loader2, { className: 'mr-2 h-4 w-4 animate-spin' }), "Sending..."] })) : (_jsxs(_Fragment, { children: ["Send Message ", _jsx(Mail, { className: 'ml-2 h-4 w-4' })] })) })] })] }) }), _jsxs("div", { className: 'space-y-6', children: [_jsxs("div", { children: [_jsx("h3", { className: 'text-xl font-bold mb-2', children: "Contact Information" }), _jsx("p", { className: 'text-muted-foreground', children: "Feel free to reach out to me through any of these channels." })] }), _jsxs("div", { className: 'flex flex-col gap-10', children: [_jsx("a", { href: 'mailto:mohamedaliabdelfadil@gmail.com', children: _jsxs("div", { className: 'flex items-start gap-4 cursor-pointer', children: [_jsx(Mail, { className: 'h-5 w-5 text-primary mt-0.5' }), _jsxs("div", { children: [_jsx("h4", { className: 'font-medium', children: "Email" }), _jsx("p", { className: 'text-muted-foreground', children: "mohamedaliabdelfadil@gmail.com" })] })] }) }), _jsx("a", { href: 'https://www.linkedin.com/in/mohamed-ali-266b521b2/', target: '_blank', children: _jsxs("div", { className: 'flex items-start gap-4 cursor-pointer', children: [_jsx(Linkedin, { className: 'h-5 w-5 text-primary mt-0.5' }), _jsxs("div", { children: [_jsx("h4", { className: 'font-medium', children: "LinkedIn" }), _jsx("p", { className: 'text-muted-foreground', children: "linkedin.com/in/mohamed-ali-266b521b2/" })] })] }) }), _jsx("a", { href: 'https://github.com/mohamedx1', target: '_blank', children: _jsxs("div", { className: 'flex items-start gap-4', children: [_jsx(Github, { className: 'h-5 w-5 text-primary mt-0.5' }), _jsxs("div", { children: [_jsx("h4", { className: 'font-medium', children: "GitHub" }), _jsx("p", { className: 'text-muted-foreground', children: "github.com/mohamedx1" })] })] }) })] })] })] })] }));
}
