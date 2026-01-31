'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/lib/utils';
import { useState } from 'react';

const categories = [
  { id: 'all', label: 'All', icon: '🚀' },
  { id: 'data-analysis', label: 'Data Analysis', icon: '📊' },
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'cloud', label: 'Cloud', icon: '☁️' },
  { id: 'database', label: 'Database', icon: '🗄️' },
  { id: 'tools', label: 'Tools', icon: '🛠️' },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'data-analysis': 'from-indigo-500 to-purple-600',
      frontend: 'from-blue-500 to-cyan-500',
      backend: 'from-green-500 to-emerald-500',
      cloud: 'from-orange-500 to-red-500',
      database: 'from-purple-500 to-pink-500',
      tools: 'from-yellow-500 to-amber-500',
    };
    return colors[category] || 'from-primary-500 to-secondary-500';
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Technologies I work with and my proficiency levels
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                    : 'glass text-gray-700 dark:text-gray-300 hover:scale-105'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-primary-500 font-semibold">
                      {skill.proficiency}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{ delay: 0.7 + index * 0.05, duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>

                {/* Category Badge */}
                <div className="mt-3">
                  <span className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full capitalize font-medium">
                    {skill.category.replace('-', ' ')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Proficient in <span className="text-primary-500 font-semibold">{skills.length}+</span> technologies
              and continuously learning more
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
