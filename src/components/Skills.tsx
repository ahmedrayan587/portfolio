// src/components/Skills.tsx
import { FaReact } from '@react-icons/all-files/fa/FaReact';
import { FaHtml5 } from '@react-icons/all-files/fa/FaHtml5';
import { FaCss3Alt } from '@react-icons/all-files/fa/FaCss3Alt';
import { FaJs } from '@react-icons/all-files/fa/FaJs';
import { FaBootstrap } from '@react-icons/all-files/fa/FaBootstrap';
import { FaNodeJs } from '@react-icons/all-files/fa/FaNodeJs';
import { FaNpm } from '@react-icons/all-files/fa/FaNpm';
import { FaGitAlt } from '@react-icons/all-files/fa/FaGitAlt';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { SiTailwindcss } from '@react-icons/all-files/si/SiTailwindcss';
import AnimatedSection from './AnimatedSection';

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className='animate-[wiggle_3s_ease_infinite]' size={30} color="#61DAFB" /> }, // React blue
    { name: 'HTML', icon: <FaHtml5 className='animate-[wiggle_3s_ease_infinite]' size={30} color="#E34F26" /> }, // HTML orange
    { name: 'CSS', icon: <FaCss3Alt className='animate-[wiggle_3s_ease_infinite]' size={30} color="#1572B6" /> }, // CSS blue
    { name: 'JavaScript', icon: <FaJs className='animate-[wiggle_3s_ease_infinite]' size={30} color="#F7DF1E" /> }, // JS yellow
    { name: 'TypeScript', icon: <SiTypescript className='animate-[wiggle_3s_ease_infinite]' size={30} color="#3178C6" /> }, // TS blue
    { name: 'Bootstrap', icon: <FaBootstrap className='animate-[wiggle_3s_ease_infinite]' size={30} color="#7952B3" /> }, // Bootstrap purple
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='animate-[wiggle_3s_ease_infinite]' size={30} color="#06B6D4" /> }, // Tailwind cyan
    { name: 'Redux', icon: <SiRedux className='animate-[wiggle_3s_ease_infinite]' size={30} color="#764ABC" /> }, // Redux purple
    { name: 'Node.js', icon: <FaNodeJs className='animate-[wiggle_3s_ease_infinite]' size={30} color="#339933" /> }, // Node green
    { name: 'NPM', icon: <FaNpm className='animate-[wiggle_3s_ease_infinite]' size={30} color="#CB3837" /> }, // NPM red
    { name: 'Git', icon: <FaGitAlt className='animate-[wiggle_3s_ease_infinite]' size={30} color="#F05032" /> }, // Git orange
    { name: 'GitHub', icon: <FaGithub className='animate-[wiggle_3s_ease_infinite]' size={30} color="#181717" /> }, // GitHub black
  ];

  return (
    <AnimatedSection id="skills">
      <div className="container pl-12 mx-auto">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <p className="font-bold mt-2" style={{ color: skill.icon.props.color }}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}