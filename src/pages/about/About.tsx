import { Button } from "../../components/ui/button";

import { Badge } from "../../components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import about from "@/assets/about.svg";
export default function About() {
  return (
    <section id='about' className='container py-24 space-y-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <Badge variant='outline'>About Me</Badge>
          <h2 className='text-3xl md:text-4xl font-bold'>
            I’m a passionate Front-End React.js Developer
          </h2>
          <p className='text-muted-foreground'>
            Front-End React.js Developer with a solid foundation in building
            responsive, interactive, and accessible web applications. I
            specialize in using modern tools like React, TypeScript, Next.js 14,
            Tailwind CSS, Redux Toolkit, and more to craft intuitive user
            experiences.
          </p>
          <p className='text-muted-foreground'>
            With hands-on experience gained through self-learning, Route Academy
            training, and building full-stack applications, I’m continuously
            pushing myself to learn more and build better. I'm currently looking
            for opportunities where I can grow within a dynamic team, contribute
            meaningful code, and build impactful user-facing products.
          </p>
          <div className='flex gap-4'>
            <a href='https://github.com/mohamedx1' target='_blank'>
              <Button variant='outline' size='icon'>
                <Github className='h-4 w-4' />
              </Button>
            </a>
            <a href='mailto:mohamedaliabdelfadil@gmail.com' target='_blank'>
              <Button variant='outline' size='icon'>
                <Mail className='h-4 w-4' />
              </Button>
            </a>
            <a
              href='https://www.linkedin.com/in/mohamed-ali-266b521b2/'
              target='_blank'
            >
              <Button variant='outline' size='icon'>
                <Linkedin className='h-4 w-4' />
              </Button>
            </a>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='relative w-72 h-72'>
            <img src={about} alt='frontEnd' />
          </div>
        </div>
      </div>
    </section>
  );
}
