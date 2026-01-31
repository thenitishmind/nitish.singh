'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaStar, FaCodeBranch, FaExternalLinkAlt, FaChartBar, FaDatabase, FaClock } from 'react-icons/fa';
import { dataAnalysisProjects } from '@/lib/utils';
import type { Project } from '@/types';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [technologies, setTechnologies] = useState<string[]>(['all']);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/github');
        const data = await response.json();
        
        if (data.repos) {
          setProjects(data.repos);
          
          // Extract unique technologies
          const allTechs = new Set<string>(['all']);
          data.repos.forEach((repo: Project) => {
            if (repo.language) allTechs.add(repo.language);
            repo.topics.forEach(topic => allTechs.add(topic));
          });
          setTechnologies(Array.from(allTechs));
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => 
        project.language === filter || project.topics.includes(filter)
      );

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-blue-600',
      Java: 'bg-red-500',
      'C++': 'bg-pink-500',
      Go: 'bg-cyan-500',
      Rust: 'bg-orange-600',
      PHP: 'bg-purple-500',
      Ruby: 'bg-red-600',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-400',
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-slate-800">
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
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              A selection of my recent work from GitHub
            </motion.p>
          </div>

          {/* Technology Filter */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {technologies.slice(0, 10).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    filter === tech
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                      : 'glass text-gray-700 dark:text-gray-300 hover:scale-105'
                  }`}
                >
                  {tech === 'all' ? 'All' : tech}
                </button>
              ))}
            </motion.div>
          )}

          {/* Projects Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass p-6 rounded-xl">
                  <div className="skeleton h-6 w-3/4 mb-4" />
                  <div className="skeleton h-4 w-full mb-2" />
                  <div className="skeleton h-4 w-5/6 mb-4" />
                  <div className="flex gap-2 mb-4">
                    <div className="skeleton h-6 w-16" />
                    <div className="skeleton h-6 w-16" />
                  </div>
                  <div className="skeleton h-10 w-full" />
                </div>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 card-hover group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <FaGithub className="text-3xl text-gray-700 dark:text-gray-300 group-hover:text-primary-500 transition-colors" />
                    <div className="flex gap-2">
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                          aria-label="Live demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[3rem]">
                    {project.description}
                  </p>

                  {/* Topics */}
                  {project.topics && project.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.topics.slice(0, 3).map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      {project.language && (
                        <div className="flex items-center gap-1">
                          <span className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                          <span>{project.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaCodeBranch />
                        <span>{project.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full text-center py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    View Project
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found for this filter.
              </p>
            </div>
          )}

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/thenitishmind"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <FaGithub className="text-xl" />
              <span>View More on GitHub</span>
            </a>
          </motion.div>

          {/* Data Analysis Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                📊 Data Analysis Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Professional data analytics and business intelligence projects
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {dataAnalysisProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.3 + index * 0.15 }}
                  className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 card-hover group"
                >
                  {/* Project Header */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
                        <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features:
                    </h5>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1">
                          <span className="text-primary-500 mt-0.5">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      <FaChartBar />
                      <span>View Dashboard</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
