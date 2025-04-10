import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import { Badge } from "../../components/ui/badge";

import masartLanding from "../../assets/masarat_landing.png";
import masart from "../../assets/masarat.png";
import freshCart from "../../assets/freshCart.png";
import mealify from "../../assets/mealify.png";
import Weather from "../../assets/Weather_App.png";
import DANIELS from "../../assets/DANIELS.png";
import ProjectCard from "./ProjectCard";

// Define types for project data
type Project = {
  title: string;
  image: string;
  category: string;
  url: string;
  description: string;
  technology: string[];
};

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
  const projects: Project[] = [
    {
      title: "Masarat Landing Page",
      image: masartLanding,
      category: "Landing Page",
      url: "https://msaratedu.com/",
      description:
        "Smart platform A brief description of the project and the technologies used.",
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
      title: "FreshCart (E-commerce)",
      image: freshCart,
      category: "Web Applaction",
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
      description:
        "time weather updates and forecasts for locations around the world. With a user-friendly interface, you can easily access information such as temperature, and precipitation chances. Whether you're planning a trip or just want to know if you need an umbrella, the Weather App has got you covered!",
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

  const web = projects.filter(
    (project) => project.category === "Web Applaction"
  );
  const landing = projects.filter(
    (project) => project.category === "Landing Page"
  );
  const profile = projects.filter((project) => project.category === "profile");

  const [, setActiveTab] = React.useState("all");

  return (
    <motion.section
      id='projects'
      className='container py-24 space-y-8'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='flex flex-col items-center text-center space-y-4'>
        <motion.div variants={itemVariants}>
          <Badge variant='outline'>My Work</Badge>
        </motion.div>
        <motion.h2
          className='text-3xl md:text-4xl font-bold'
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className='text-muted-foreground max-w-[700px]'
          variants={itemVariants}
        >
          A selection of my recent work. These projects showcase my skills and
          experience.
        </motion.p>
      </div>

      <Tabs
        defaultValue='all'
        className='w-full transition-all'
        onValueChange={setActiveTab}
      >
        <motion.div className='flex justify-center' variants={itemVariants}>
          <TabsList>
            <TabsTrigger value='all'>All</TabsTrigger>
            <TabsTrigger value='web'>Web Applications</TabsTrigger>
            <TabsTrigger value='landing'>Landing Pages</TabsTrigger>
            <TabsTrigger value='profile'>Profiles</TabsTrigger>
          </TabsList>
        </motion.div>

        <AnimatePresence mode='wait'>
          <TabsContent value='all' className='mt-8'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value='web' className='mt-8'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {web.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value='landing' className='mt-8'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {landing.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value='profile' className='mt-8'>
            <motion.div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {profile.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </motion.div>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </motion.section>
  );
}
