'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/lib/utils';
import { FaMapMarkerAlt, FaCalendar, FaBriefcase, FaChevronRight } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4"
            >
              <FaBriefcase className="text-primary-600 dark:text-primary-400" />
              <span className="text-primary-700 dark:text-primary-300 font-semibold text-sm">
                Professional Journey
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            >
              Work Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Building impactful solutions and driving data-driven decisions
            </motion.p>
          </div>

          {/* Enhanced Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical line for desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-primary-500 hidden lg:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.2 }}
                className={`relative mb-16 last:mb-0 lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg animate-pulse" />
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative p-8">
                      {/* Header with logo */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {exp.company.charAt(0)}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                            {exp.role}
                          </h3>
                          <h4 className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                            {exp.company}
                          </h4>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                            <FaCalendar className="text-primary-600 dark:text-primary-400" />
                          </div>
                          <span className="font-medium">{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                            <FaMapMarkerAlt className="text-secondary-600 dark:text-secondary-400" />
                          </div>
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.6 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <FaChevronRight className="text-primary-500 mt-1 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 + index * 0.2 + i * 0.05 }}
                            className="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold border border-primary-200 dark:border-primary-800 hover:scale-105 transition-transform cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
