import { ModeToggle } from "../../components/mode-toggle";
import { Button } from "../../components/ui/button";
export default function Navbar() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='font-bold text-xl '>
          Abdelfadel<span className='text-primary '>.</span>
        </div>
        <nav className='hidden md:flex items-center gap-6'>
          <a
            href='#home'
            className='text-foreground/60 hover:text-foreground transition-colors '
          >
            Home
          </a>
          <a
            href='#projects'
            className='text-foreground/60 hover:text-foreground transition-colors'
          >
            Projects
          </a>
          <a
            href='#about'
            className='text-foreground/60 hover:text-foreground transition-colors'
          >
            About
          </a>
          <a
            href='#contact'
            className='text-foreground/60 hover:text-foreground transition-colors'
          >
            Contact
          </a>
        </nav>
        <div className='flex items-center gap-4 '>
          <ModeToggle />
          <a href='#contact'>
            <Button className='border rounded-lg'>Let's Talk</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
