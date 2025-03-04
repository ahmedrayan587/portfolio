// src/components/Contact.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedSection from './AnimatedSection';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { SiGmail } from '@react-icons/all-files/si/SiGmail';

export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={30} color="#181717" />, // GitHub black
      url: 'https://github.com/ahmedrayan587',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={30} color="#0A66C2" />, // LinkedIn blue
      url: 'https://linkedin.com/in/ahmed-rayan-a837911b3',
    },
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={30} color="#25D366" />, // WhatsApp green
      url: 'https://wa.me/+201097500680',
    },
    {
      name: 'Gmail',
      icon: <SiGmail size={30} color="#EA4335" />, // Gmail red
      url: 'mailto:ahmedrayan587@gmail.com',
    },
  ];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Add form submission logic here
        // Replace these with your EmailJS credentials
        const serviceID = 'service_nme6b9b';
        const templateID = 'template_b1i6icd';
        const publicKey = 'lJy3siEZ1B7yH_dn4';
    
        // Send the email using EmailJS
        emailjs
          .send(
            serviceID,
            templateID,
            {
              from_name: name,
              from_email: email,
              message: message,
            }, {
              publicKey,
            }
          )
          .then(
            (response) => {
              console.log('Email sent successfully!', response.status, response.text);
              alert('Message sent successfully!');
              setName('');
              setEmail('');
              setMessage('');
            },
            (error) => {
              console.error('Failed to send email:', error);
              alert('Failed to send message. Please try again.');
            }
          );
  };

  return (
    <AnimatedSection id="contact">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
            <button
              type='submit'
              className="cursor-pointer w-full relative group overflow-hidden rounded-md border-2 px-8 py-2 border-teal-500"
            >
              <span className="font-bold text-white text-xl relative z-10 group-hover:text-teal-500 duration-500">Submit</span>
              <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 group-hover:translate-x-full h-full"></span>
              
                <span className="absolute top-0 left-0 w-full bg-teal-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-teal-500 duration-500 group-hover:translate-y-full h-full"></span>
            </button>
        </form>
        <div className="mt-8 text-center">
          <div className="flex justify-center items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 hover:-translate-y-1 transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}