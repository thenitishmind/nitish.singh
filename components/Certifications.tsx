'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '@/lib/utils';
import { FaAws, FaMicrosoft, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'aws':
        return <FaAws className="text-4xl text-orange-500" />;
      case 'azure':
        return <FaMicrosoft className="text-4xl text-blue-500" />;
      default:
        return <FaCertificate className="text-4xl text-primary-500" />;
    }
  };

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-slate-900">
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
              Certifications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Professional certifications and achievements
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20, rotateY: 90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="glass p-6 rounded-xl hover:shadow-2xl transition-all duration-300 card-hover group"
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {getIcon(cert.icon || 'certificate')}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  {cert.name}
                </h3>
                <p className="text-primary-500 font-semibold text-center mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm text-center mb-4">
                  Issued: {cert.date}
                </p>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 hover:scale-105 transition-all duration-300"
                  >
                    <span>View Credential</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Add more certifications message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Continuously learning and adding more certifications
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
