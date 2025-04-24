import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { TECHNOLOGIES } from '../utils/constants';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-neutral-50">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-neutral-900">About the <span className="text-primary-600">Project</span></h2>
          <p className="section-subtitle">
            The Movie Genre Predictor is an AI-powered application that uses natural language processing to analyze movie descriptions and predict relevant genres.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Story</h3>
            <div className="space-y-4 text-neutral-700">
              <p>
                The Movie Genre Predictor project emerged from a fascination with how language can reveal the underlying themes and genres of films. Using machine learning, specifically DistilBERT, we've created a tool that can analyze textual descriptions and identify multiple genres that apply to a given movie.
              </p>
              <p>
                This project is particularly useful for movie enthusiasts, screenwriters, producers, and researchers exploring NLP applications. By automating genre classification, we're making it easier to categorize and understand film content through text alone.
              </p>
              <p>
                Our system leverages a fine-tuned transformer model that has been trained on thousands of movie descriptions and their corresponding genres. This allows for nuanced, multi-label classification that captures the complexity of modern films that often span multiple genres.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6">Project Highlights</h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Transformer-based model</p>
                  <p className="text-sm text-neutral-600">Utilizes DistilBERT for state-of-the-art text analysis</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Containerized deployment</p>
                  <p className="text-sm text-neutral-600">Docker-based deployment ensures consistent performance</p>
                </div>
              </li>
              <li className="flex">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Modern tech stack</p>
                  <p className="text-sm text-neutral-600">Built with React and FastAPI for optimal performance</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-10 text-center">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TECHNOLOGIES.map((tech, index) => {
              const Icon = LucideIcons[tech.icon as keyof typeof LucideIcons];
              
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    {Icon && <Icon size={24} className="text-primary-600" />}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{tech.name}</h4>
                  <p className="text-sm text-neutral-600">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;