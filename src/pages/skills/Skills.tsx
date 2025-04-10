"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

// Update the Skill type to use image URLs instead of icons
type Skill = {
  name: string;
  imageUrl: string;
  color: string;
};

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      duration: 0.6,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
  hover: {
    scale: 1.2,
    rotate: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function SkillsSection() {
  // Here you would replace these URLs with your actual logo images
  const skills: Skill[] = [
    {
      name: "React.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Bootstrap",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "#7952B3",
    },
    {
      name: "Figma",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
    },
    {
      name: "JavaScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "Next.js",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    {
      name: "Tailwind",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "#38B2AC",
    },
    {
      name: "Git",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "TypeScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "HTML5",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26",
    },
    {
      name: "Sass",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      color: "#CC6699",
    },
    {
      name: "Redux",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      color: "#764ABC",
    },
    {
      name: "CSS3",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6",
    },
    {
      name: "postman",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      color: "#E34F26",
    },
    {
      name: "GitHub",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
  ];

  return (
    <motion.section
      id='skills'
      className='container py-24 space-y-8'
      variants={sectionVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className='flex flex-col items-center text-center space-y-4'
        variants={headerVariants}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <Badge variant='outline'>My Expertise</Badge>
        </motion.div>
        <motion.h2
          className='text-3xl md:text-4xl font-bold'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className='text-muted-foreground max-w-[700px]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I've developed expertise in a variety of technologies and tools that
          enable me to build modern, responsive, and user-friendly web
          applications.
        </motion.p>
      </motion.div>

      <motion.div
        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.07,
            },
          },
        }}
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

// Updated SkillCard to use images instead of icons
function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover='hover'
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className='bg-card border border-border h-full'>
        <CardContent className='p-6 flex flex-col items-center text-center space-y-2'>
          <motion.div
            className='relative'
            variants={imageVariants}
            animate={isHovered ? "hover" : "visible"}
          >
            {/* Image with hover effect */}
            <motion.img
              loading='lazy'
              src={skill.imageUrl}
              alt={skill.name}
              className='h-16 w-16 object-contain'
              style={{
                filter: isHovered
                  ? "drop-shadow(0 0 8px " + skill.color + ")"
                  : "none",
              }}
            />

            {isHovered && (
              <motion.div
                className='absolute -inset-4 rounded-full'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.15,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                style={{ backgroundColor: skill.color }}
              />
            )}
          </motion.div>

          <motion.h3
            className='font-medium mt-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            {skill.name}
          </motion.h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}
