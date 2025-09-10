import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";
import masartLanding from "../../assets/masarat_landing.png";
import masart from "../../assets/masarat.png";
import freshCart from "../../assets/freshCart.png";
import mealify from "../../assets/mealify.png";
import Weather from "../../assets/Weather_App.png";
import DANIELS from "../../assets/DANIELS.png";
import German from "../../assets/german.png";
import ProjectCard from "./ProjectCard";
// Animation variants
const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};
export default function ProjectsSection() {
    const projects = [
        {
            title: "Masarat Landing Page",
            image: masartLanding,
            category: "Landing Page",
            url: "https://msaratedu.com/",
            description: "Smart platform A brief description of the project and the technologies used.",
            technology: ["React", "Tailwind", "Redux"],
        },
        {
            title: "Masarat (e-Learning Platform)",
            image: masart,
            category: "Web Applaction",
            url: "https://dashboard.msaratedu.com/",
            description: `Developed an AI-powered interactive learning platform designed
         to provide a personalized learning experience for students. \n
         Features included analyzing student focus through a camera, automated question narration, and
        real-time interaction with an AI assistant for queries related to the learning material.
        Integrated a parental dashboard to enable guardians to monitor student progress and
        performance
          `,
            technology: ["React", "Tailwind", "TypeScript", "Redux", "ShadCN"],
        },
        {
            title: "German Chemicals",
            image: German,
            category: "Web Applaction",
            url: "https://germanchemicals-eg.com/",
            description: ` My Role
        I focused on building the frontend using React.js and Tailwind CSS, following Atomic Design principles to ensure a scalable and consistent UI.
        I was responsible for the Products catalog and Contact forms, integrating them with the backend via WordPress REST APIs using Advanced Custom Fields (ACF).
          `,
            technology: ["Next.js", "Tailwind", "TypeScript", "ShadCN"],
        },
        {
            title: "FreshCart (E-commerce)",
            image: freshCart,
            category: "Profile",
            url: "https://fresh-cart-final.vercel.app/login",
            description: `The graduation project for Route Academy Front-End track, which is a full e-commerce web
              application using React.js
              This project's state management was achieved using only ContextAPI
              A real-world payment gateway (Stripe) was implemented in this project`,
            technology: ["React", "Bootstrap", "Context"],
        },
        {
            title: "Mealify",
            image: mealify,
            category: "Landing Page",
            url: "https://mohamedx1.github.io/Mealify/",
            description: "Resturant Landing Page",
            technology: ["HTML5", "css3", "JavaScript"],
        },
        {
            title: "Weather App",
            image: Weather,
            category: "Web Applaction",
            url: "https://mohamedx1.github.io/Weather_App_Final/",
            description: "time weather updates and forecasts for locations around the world. With a user-friendly interface, you can easily access information such as temperature, and precipitation chances. Whether you're planning a trip or just want to know if you need an umbrella, the Weather App has got you covered!",
            technology: ["HTML5", "css3", "JavaScript", "Bootstrap"],
        },
        {
            title: "DANIELS",
            image: DANIELS,
            category: "profile",
            url: "https://mohamedx1.github.io/DANIELS/",
            description: "Profile template ",
            technology: ["HTML5", "css3", "JavaScript", "Bootstrap"],
        },
    ];
    const web = projects.filter((project) => project.category === "Web Applaction");
    const landing = projects.filter((project) => project.category === "Landing Page");
    const profile = projects.filter((project) => project.category === "profile");
    const [, setActiveTab] = React.useState("all");
    return (_jsxs(motion.section, { id: 'projects', className: 'container py-24 space-y-8', initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 }, variants: sectionVariants, children: [_jsxs("div", { className: 'flex flex-col items-center text-center space-y-4', children: [_jsx(motion.div, { variants: itemVariants, children: _jsx(Badge, { variant: 'outline', children: "My Work" }) }), _jsx(motion.h2, { className: 'text-3xl md:text-4xl font-bold', variants: itemVariants, children: "Featured Projects" }), _jsx(motion.p, { className: 'text-muted-foreground max-w-[700px]', variants: itemVariants, children: "A selection of my recent work. These projects showcase my skills and experience." })] }), _jsxs(Tabs, { defaultValue: 'all', className: 'w-full transition-all', onValueChange: setActiveTab, children: [_jsx(motion.div, { className: 'flex justify-center', variants: itemVariants, children: _jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: 'all', children: "All" }), _jsx(TabsTrigger, { value: 'web', children: "Web Applications" }), _jsx(TabsTrigger, { value: 'landing', children: "Landing Pages" }), _jsx(TabsTrigger, { value: 'profile', children: "Profiles" })] }) }), _jsxs(AnimatePresence, { mode: 'wait', children: [_jsx(TabsContent, { value: 'all', className: 'mt-8', children: _jsx(motion.div, { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, children: projects.map((project, idx) => (_jsx(ProjectCard, { project: project, index: idx }, idx))) }) }), _jsx(TabsContent, { value: 'web', className: 'mt-8', children: _jsx(motion.div, { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, children: web.map((project, idx) => (_jsx(ProjectCard, { project: project, index: idx }, idx))) }) }), _jsx(TabsContent, { value: 'landing', className: 'mt-8', children: _jsx(motion.div, { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, children: landing.map((project, idx) => (_jsx(ProjectCard, { project: project, index: idx }, idx))) }) }), _jsx(TabsContent, { value: 'profile', className: 'mt-8', children: _jsx(motion.div, { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.3 }, children: profile.map((project, idx) => (_jsx(ProjectCard, { project: project, index: idx }, idx))) }) })] })] })] }));
}
