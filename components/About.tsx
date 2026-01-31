'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaChartBar, FaAws, FaDatabase, FaPython, FaCode } from 'react-icons/fa';
import { personalInfo, education } from '@/lib/utils';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <FaChartBar className="w-8 h-8" />,
      title: 'Data Analyst',
      description: 'Expert in data analysis, visualization, and business intelligence',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <FaPython className="w-8 h-8" />,
      title: 'Python & SQL Expert',
      description: 'Proficient in data manipulation and database querying',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FaAws className="w-8 h-8" />,
      title: 'Cloud Certified',
      description: 'AWS & Azure certified professional',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: 'Full-Stack Developer',
      description: 'MERN stack with 2+ years of freelance experience',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary-500 rounded-full blur-3xl" />
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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Transforming data into actionable insights and building scalable solutions
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left side - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Hi, I&apos;m {personalInfo.name} 👋
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  A passionate <span className="text-primary-600 dark:text-primary-400 font-semibold">Data Analyst</span> and <span className="text-primary-600 dark:text-primary-400 font-semibold">Full-Stack Developer</span> with expertise in transforming complex data into actionable business insights and building scalable web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Currently working as a Data Analyst at <span className="font-semibold text-gray-900 dark:text-white">Bizloan India Pvt. Ltd.</span>, where I leverage Python, SQL, Power BI, and Tableau to drive data-driven decision making. I specialize in creating interactive dashboards, performing statistical analysis, and building ETL pipelines.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  With 2+ years of freelance development experience and cloud certifications from AWS & Azure, I bring a unique blend of data analytics and software engineering skills to every project.
                </p>

                {/* Key Skills Icons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {['Power BI', 'Tableau', 'Python', 'SQL', 'Excel', 'React'].map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-semibold border border-primary-200 dark:border-primary-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl"
              >
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <FaGraduationCap className="text-primary-500 text-xl" />
                  </div>
                  Education
                </h4>
                <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg">
                  {education.degree}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {education.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                  {education.duration}
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { label: 'Experience', value: '2+', suffix: 'Years' },
                  { label: 'Projects', value: '15+', suffix: 'Done' },
                  { label: 'Certifications', value: '3+', suffix: 'Earned' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900 p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      {stat.suffix}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group bg-white dark:bg-slate-900 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary-300 dark:hover:border-primary-700"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-gradient-to-br ${item.gradient} rounded-xl text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
