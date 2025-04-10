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
  return (
    <ThemeProvider defaultTheme='dark'>
      <div className='min-h-screen bg-background'>
        <Navbar />
        <main>
          {/* Hero Section */}
          <Hero />
          {/* Skills Section */}
          <SkillsSection />
          {/* Projects Section */}
          <Projects />
          {/* About Section */}
          <About />
          {/* Contact Section */}
          <Contact />
          {/* Footer Section */}
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
