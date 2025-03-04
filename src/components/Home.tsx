// src/components/Home.tsx
import { Button } from 'react-scroll';
import AnimatedSection from './AnimatedSection';

export default function Home() {
  return (
    <AnimatedSection id="home">
      <div className="container pl-12 h-screen flex flex-col justify-end lg:justify-center items-start">
        <h3 className="text-4xl font-bold">Hello, <span className='text-lg'>I'm Ahmed Rayan</span></h3>
        <p className="text-lg mb-4">Front-End Developer</p>
        <p className="text-lg mb-4 max-w-[300px] md:max-w-[500px]">I am a passionate and creative Front End Developer with experience in creating highly polished Interfaces for the web & mobile.</p>
        <div className="flex flex-wrap justify-around items-center">
          <Button
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer m-1 w-[200px] text-center relative group overflow-hidden rounded-md border-2 px-8 py-2 border-teal-500"
          >
            <span className="font-bold text-white text-xl relative z-10 group-hover:text-teal-500 duration-500">View My Work</span>
            <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 group-hover:translate-x-full h-full"></span>
            
              <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-teal-500 duration-500 group-hover:translate-y-full h-full"></span>
          </Button>
          <a
            href="https://drive.google.com/file/d/1PGo0hkRlL0cZbCmcxFi18tYsB4cHGAMk/view?usp=drive_link"
            className="cursor-pointer m-1 w-[200px] text-center relative group overflow-hidden rounded-md border-2 px-8 py-2 border-teal-500"
          >
            <span className="font-bold text-white text-xl relative z-10 group-hover:text-teal-500 duration-500">Download CV</span>
            <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 group-hover:-translate-x-full h-full"></span>
            <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 group-hover:translate-x-full h-full"></span>
            
              <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
            <span className="absolute delay-300 top-0 left-0 w-full bg-teal-500 duration-500 group-hover:translate-y-full h-full"></span>
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}