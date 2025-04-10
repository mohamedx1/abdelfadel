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
export default function ProjectCard({ project, index }: ProjectCardProps): import("react/jsx-runtime").JSX.Element;
export {};
