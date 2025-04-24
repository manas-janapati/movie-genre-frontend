import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-neutral-900">
            Get in <span className="text-primary-600">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have questions about the Movie Genre Predictor? Interested in
            collaboration or just want to say hello? Reach out to us!
          </p>
        </div>

        <motion.div
          ref={ref}
          className="max-w-2xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = LucideIcons[link.icon as keyof typeof LucideIcons];

              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-neutral-200 rounded-lg transition-all hover:border-primary-300 hover:bg-primary-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    {Icon && <Icon size={20} className="text-primary-600" />}
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">
                      {link.name}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {link.url.replace('mailto:', '')}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;