import { Button } from "../../components/ui/button";
// import { Card, CardContent } from "../../components/ui/card";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "../../components/animation/LottieAnimation";

export default function Hero() {
  return (
    <section id='home' className='container py-24 md:py-32 '>
      <div className='flex flex-col md:flex-row justify-center items-center   '>
        <div className='flex flex-col items-center text-center gap-2 space-y-4 w-full md:w-1/2 py-32 md:py-8  '>
          <h1 className='text-4xl md:text-5xl font-bold leading-tight tracking-tighter md:leading-tight max-w-3xl flex flex-col'>
            <span>Hello</span>
            <span>I AM Mohamed Ali</span>
            <span>Front-End Developer</span>
          </h1>
          <p className='text-xl text-muted-foreground max-w-[700px]'>
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing.
          </p>
          <div className='flex flex-wrap gap-4 justify-center'>
            <Button size='lg'>
              View Projects <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
            <Button size='lg' variant='outline'>
              Contact Me
            </Button>
          </div>
        </div>
        <div className='w-full md:w-1/2 '>
          <LottieAnimation />
        </div>
      </div>
    </section>
  );
}
