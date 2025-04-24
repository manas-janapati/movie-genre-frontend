import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { FEATURES } from '../utils/constants';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="section bg-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-neutral-900">Powerful <span className="text-primary-600">Features</span></h2>
          <p className="section-subtitle">
            Our movie genre predictor combines cutting-edge AI with intuitive design to deliver accurate genre classifications based on descriptions.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {FEATURES.map((feature, index) => {
            const Icon = LucideIcons[feature.icon as keyof typeof LucideIcons];
            
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {Icon && <Icon size={24} className="text-primary-600" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;