import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
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
export default function ProjectCard({ project, index }) {
    return (_jsx(motion.div, { custom: index, variants: cardVariants, initial: 'hidden', animate: 'visible', whileHover: 'hover', className: 'h-full', children: _jsxs(Card, { className: 'overflow-hidden group h-full flex flex-col', children: [_jsxs("div", { className: 'aspect-video relative overflow-hidden', children: [_jsx(motion.img, { loading: 'lazy', src: project.image, alt: project.title, className: 'object-contain w-full h-full', whileHover: { scale: 1.05 }, transition: { duration: 0.3 } }), _jsx(motion.div, { className: 'absolute inset-0 bg-black/60 flex items-center justify-center', initial: { opacity: 0 }, whileHover: { opacity: 1 }, transition: { duration: 0.3 }, children: _jsx(Button, { variant: 'outline', className: '  border-white', asChild: true, children: _jsxs("a", { href: project.url, target: '_blank', rel: 'noopener noreferrer', children: ["View Project ", _jsx(ExternalLink, { className: 'ml-2 h-4 w-4' })] }) }) })] }), _jsxs(CardContent, { className: 'p-4 flex-1 flex flex-col', children: [_jsx(Badge, { className: 'mb-2 self-start', children: project.category }), _jsx("h3", { className: 'font-bold text-lg mb-1', children: project.title }), _jsx("p", { className: 'text-muted-foreground text-sm mb-4 flex-1', children: project.description.length > 150
                                ? `${project.description.substring(0, 150)}...`
                                : project.description }), _jsx("div", { className: 'flex gap-2 flex-wrap mt-auto', children: project.technology.map((tech, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 * idx, duration: 0.3 }, children: _jsx(Badge, { variant: 'secondary', children: tech }) }, idx))) })] })] }) }));
}
