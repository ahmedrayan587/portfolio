// src/components/About.tsx
import AnimatedSection from './AnimatedSection';

export default function About() {
  return (
    <AnimatedSection id="about">
      <div className="container pl-12 mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-2/5 text-center md:text-left">
          
        </div>
        <div className="md:w-3/5 md:ml-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4 max-w-[300px] md:max-w-[600px]">Highly motivated and detail-oriented <span className='font-bold'>React Front-End Developer</span> with hands-on
            experience in building <span className='font-bold'>responsive, user-centric web applications</span>. Proficient
            in <span className='font-bold'>JavaScript (ES6+), React.js, HTML5, CSS3, and TypeScript</span>, with a strong focus
            on <span className='font-bold'>component-based architecture</span> and <span className='font-bold'>state management</span>. Skilled in leveraging modern
            tools like <span className='font-bold'>Git, RESTful APIs, and build tools (npm, yarn)</span> to deliver high-quality solutions.
            Passionate about creating seamless user experiences and staying updated with the latest
            industry trends.
        </p>
        </div>
      </div>
    </AnimatedSection>
  );
}