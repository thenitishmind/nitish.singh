'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import Image from 'next/image';
import { personalInfo } from '@/lib/utils';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-primary-400 font-semibold text-lg">Hi there, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl mb-6 h-20"
            >
              {mounted && (
                <TypeAnimation
                  sequence={[
                    'Data Analyst',
                    2000,
                    'Full-Stack Developer',
                    2000,
                    'Cloud Enthusiast',
                    2000,
                    'Problem Solver',
                    2000,
                    'Business Intelligence Expert',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-primary-400"
                />
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 mb-8 max-w-xl"
            >
              Passionate about building scalable web applications with modern technologies.
              AWS & Azure certified with 2+ years of freelance experience.
            </motion.p>

            {/* Social buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-500 hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope />
                <span>Email Me</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-500 hover:scale-105 transition-all duration-300"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-500 hover:scale-105 transition-all duration-300"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary-500 hover:scale-105 transition-all duration-300"
              >
                <FaCode />
                <span>LeetCode</span>
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-secondary-500 rounded-full blur-3xl opacity-40 animate-pulse" />
              
              {/* Rotating gradient border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-purple-500 to-secondary-400 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900" />
              </div>
              
              {/* Image container with better styling */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 p-[3px] shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/img_01.png"
                    alt={personalInfo.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    style={{ objectPosition: '50% 35%' }}
                    priority
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 450px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white"
        >
          <HiChevronDown className="text-4xl" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
