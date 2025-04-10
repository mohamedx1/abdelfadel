import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
type Project = {
  title: string;
  image: string;
  category: string;
  url: string;
  description: string;
  technology: string[];
};

interface ProjectCardProps {
  project: Project;
  index: number;
}
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      whileHover='hover'
      className='h-full'
    >
      <Card className='overflow-hidden group h-full flex flex-col'>
        <div className='aspect-video relative overflow-hidden'>
          <motion.img
            loading='lazy'
            src={project.image}
            alt={project.title}
            className='object-contain w-full h-full'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className='absolute inset-0 bg-black/60 flex items-center justify-center'
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant='outline' className='  border-white' asChild>
              <a href={project.url} target='_blank' rel='noopener noreferrer'>
                View Project <ExternalLink className='ml-2 h-4 w-4' />
              </a>
            </Button>
          </motion.div>
        </div>
        <CardContent className='p-4 flex-1 flex flex-col'>
          <Badge className='mb-2 self-start'>{project.category}</Badge>
          <h3 className='font-bold text-lg mb-1'>{project.title}</h3>
          <p className='text-muted-foreground text-sm mb-4 flex-1'>
            {project.description.length > 150
              ? `${project.description.substring(0, 150)}...`
              : project.description}
          </p>
          <div className='flex gap-2 flex-wrap mt-auto'>
            {project.technology.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.3 }}
              >
                <Badge variant='secondary'>{tech}</Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
