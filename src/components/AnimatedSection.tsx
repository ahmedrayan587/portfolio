// src/components/AnimatedSection.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string; // Add an optional id prop
}

export default function AnimatedSection({ children, id }: AnimatedSectionProps) {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
      className="py-16"
      id={id} // Use the id prop here
    >
      {children}
    </motion.section>
  );
}