import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import about from "@/assets/about.svg";
export default function About() {
    return (_jsx("section", { id: 'about', className: 'container py-24 space-y-8', children: _jsxs("div", { className: 'grid grid-cols-1 md:grid-cols-2 gap-12 items-center', children: [_jsxs("div", { className: 'space-y-6', children: [_jsx(Badge, { variant: 'outline', children: "About Me" }), _jsx("h2", { className: 'text-3xl md:text-4xl font-bold', children: "I\u2019m a passionate Front-End React.js Developer" }), _jsx("p", { className: 'text-muted-foreground', children: "Front-End React.js Developer with a solid foundation in building responsive, interactive, and accessible web applications. I specialize in using modern tools like React, TypeScript, Next.js 14, Tailwind CSS, Redux Toolkit, and more to craft intuitive user experiences." }), _jsx("p", { className: 'text-muted-foreground', children: "With hands-on experience gained through self-learning, Route Academy training, and building full-stack applications, I\u2019m continuously pushing myself to learn more and build better. I'm currently looking for opportunities where I can grow within a dynamic team, contribute meaningful code, and build impactful user-facing products." }), _jsxs("div", { className: 'flex gap-4', children: [_jsx("a", { href: 'https://github.com/mohamedx1', target: '_blank', children: _jsx(Button, { variant: 'outline', size: 'icon', children: _jsx(Github, { className: 'h-4 w-4' }) }) }), _jsx("a", { href: 'mailto:mohamedaliabdelfadil@gmail.com', target: '_blank', children: _jsx(Button, { variant: 'outline', size: 'icon', children: _jsx(Mail, { className: 'h-4 w-4' }) }) }), _jsx("a", { href: 'https://www.linkedin.com/in/mohamed-ali-266b521b2/', target: '_blank', children: _jsx(Button, { variant: 'outline', size: 'icon', children: _jsx(Linkedin, { className: 'h-4 w-4' }) }) })] })] }), _jsx("div", { className: 'flex justify-center', children: _jsx("div", { className: 'relative w-72 h-72', children: _jsx("img", { src: about, alt: 'frontEnd' }) }) })] }) }));
}
