import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";
import Projects from "./pages/Projects/Projects";
import Footer from "./pages/footer/Footer";
import About from "./pages/about/About";
import Hero from "./pages/hero/Hero";
import Contact from "./pages/contact/Contact";
import Navbar from "./pages/navbar/Navbar";
import { SkillsSection } from "./pages/skills/Skills";
function App() {
    return (_jsx(ThemeProvider, { defaultTheme: 'dark', children: _jsxs("div", { className: 'min-h-screen bg-background', children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(SkillsSection, {}), _jsx(Projects, {}), _jsx(About, {}), _jsx(Contact, {}), _jsx(Footer, {})] })] }) }));
}
export default App;
