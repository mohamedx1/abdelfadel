import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "../../components/animation/LottieAnimation";
export default function Hero() {
    return (_jsx("section", { id: 'home', className: 'container py-24 md:py-32 ', children: _jsxs("div", { className: 'flex flex-col lg:flex-row justify-center items-center   ', children: [_jsxs("div", { className: 'flex flex-col items-start text-start gap-2 space-y-4 w-full md:w-1/2 py-32 md:py-8  ', children: [_jsxs("h1", { className: 'text-4xl md:text-5xl font-bold leading-tight tracking-tighter md:leading-tight max-w-3xl flex flex-col', children: [_jsx("span", { children: "Hello" }), _jsx("span", { children: "I AM Mohamed Ali" }), _jsx("span", { children: "Front-End Developer" })] }), _jsx("p", { className: 'text-xl text-muted-foreground max-w-[700px]', children: "I build exceptional digital experiences that are fast, accessible, and visually appealing." }), _jsxs("div", { className: 'flex flex-wrap gap-4 justify-center', children: [_jsx("a", { href: '#projects', children: _jsxs(Button, { size: 'lg', children: ["View Projects ", _jsx(ArrowRight, { className: 'ml-2 h-4 w-4' })] }) }), _jsx("a", { href: '#contact', children: _jsx(Button, { size: 'lg', variant: 'outline', children: "Contact Me" }) })] })] }), _jsx("div", { className: 'w-full  ', children: _jsx(LottieAnimation, {}) })] }) }));
}
