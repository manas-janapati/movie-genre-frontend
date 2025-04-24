import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 text-neutral-900">
              Predict Movie Genres with <span className="text-primary-600">AI</span> Precision
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-2xl md:mx-0 mx-auto">
              Our advanced machine learning model accurately predicts movie genres from descriptions, 
              making it perfect for writers, producers, and film enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#demo" className="btn-primary text-center">
                Try the predictor
              </a>
              <a href="#features" className="btn-outline text-center flex items-center justify-center">
                Learn more
                <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-xl relative z-10">
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-4/5 p-4 bg-white rounded-lg shadow-md">
                  <div className="h-6 w-40 bg-primary-200 rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-neutral-200 rounded"></div>
                    <div className="h-4 w-full bg-neutral-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-neutral-200 rounded"></div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="h-6 w-16 bg-primary-400 rounded"></div>
                    <div className="h-6 w-16 bg-secondary-400 rounded"></div>
                    <div className="h-6 w-16 bg-neutral-400 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="h-5 w-32 bg-neutral-200 rounded"></div>
                  <div className="h-4 w-24 bg-neutral-100 rounded mt-1"></div>
                </div>
                <div className="h-8 w-24 bg-primary-500 rounded"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hidden md:block absolute top-40 right-24 w-16 h-16 bg-primary-400 rounded-full opacity-20"></div>
            <div className="hidden md:block absolute bottom-32 left-32 w-24 h-24 bg-secondary-400 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;