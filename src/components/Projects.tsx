// src/components/Projects.tsx
import AnimatedSection from './AnimatedSection';
import FAZFOOD from '../assets/FAZFOOD.png';
import TechNest from '../assets/TechNest.png';
import ProjectCard from './ProjectCard';


export default function Projects() {
  const projects = [
    {
      title: 'FAZFOOD',
      description: 'Developed a modern e-commerce platform using Typescript, React.js andTailwind CSS for a seamless and responsive user experience. Implemented searching and filtering functionality to help users find itemsquickly and efficiently. Ensured mobile-first design principles for a fully responsive user interface.',
      image: FAZFOOD,
      github: 'https://github.com/ahmedrayan587/FAZFOOD',
      live: 'https://ahmedrayan587.github.io/FAZFOOD/',
    },
    {
      title: 'TechNest',
      description: 'Developed a modern e-commerce platform using React.js and Tailwind CSS fora seamless and responsive user experience. Implemented filtering functionality to help users find items quickly andefficiently Integrated shopping cart and checkout features with secure payment gatewayoptions. Ensured mobile-first design principles for a fully responsive user interface.',
      image: TechNest,
      github: 'https://github.com/ahmedrayan587/TechNest',
      live: 'https://ahmedrayan587.github.io/TechNest/',
    },
  ];

  return (
    <AnimatedSection id="projects">
      <div className="container pl-12 mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="flex flex-wrap justify-center items-center">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} image={project.image} github={project.github} live={project.live} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}