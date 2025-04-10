import { Button } from "../../components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='container py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <div className='font-bold text-xl mb-4'>
              Abdelfadel<span className='text-primary'>.</span>
            </div>
            <p className='text-muted-foreground'>
              Building exceptional digital experiences that are fast,
              accessible, and visually appealing.
            </p>
          </div>
          <div>
            <h3 className='font-medium text-lg mb-4'>Quick Links</h3>
            <nav className='flex flex-col gap-2'>
              <a
                href='#home'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Home
              </a>
              <a
                href='#projects'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Projects
              </a>
              <a
                href='#about'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                About
              </a>
              <a
                href='#contact'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className='font-medium text-lg mb-4'>Connect</h3>
            <div className='flex gap-4'>
              <a href='https://github.com/mohamedx1' target='_blank'>
                <Button
                  aria-label='Open navigation menu'
                  variant='outline'
                  size='icon'
                >
                  <Github className='h-4 w-4' />
                </Button>
              </a>
              <a href='mailto:mohamedaliabdelfadil@gmail.com' target='_blank'>
                <Button
                  aria-label='Open navigation menu'
                  variant='outline'
                  size='icon'
                >
                  <Mail className='h-4 w-4' />
                </Button>
              </a>
              <a
                href='https://www.linkedin.com/in/mohamed-ali-266b521b2/'
                target='_blank'
              >
                <Button
                  aria-label='Open navigation menu'
                  variant='outline'
                  size='icon'
                >
                  <Linkedin className='h-4 w-4' />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className='border-t mt-8 pt-8 text-center  '>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Abdelfadel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
