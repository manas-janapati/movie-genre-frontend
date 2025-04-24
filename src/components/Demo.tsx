import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { Sparkles, X, Loader2 } from 'lucide-react';
import { API_URL, SAMPLE_DESCRIPTIONS } from '../utils/constants';

const Demo: React.FC = () => {
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedSample, setSelectedSample] = useState(-1);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePredict = async () => {
    if (!description.trim()) return;
    
    setError('');
    setGenres([]);
    setLoading(true);
    
    try {
      const response = await axios.post(`${API_URL}/predict`, { description });
      setGenres(response.data.genres);
    } catch (err) {
      setError('Error predicting genres. This may be due to CORS restrictions or server unavailability. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleUseSample = (index: number) => {
    setSelectedSample(index);
    setDescription(SAMPLE_DESCRIPTIONS[index]);
    setGenres([]);
    setError('');
  };

  const handleClear = () => {
    setDescription('');
    setGenres([]);
    setError('');
    setSelectedSample(-1);
  };

  return (
    <section id="demo" className="section bg-gradient-to-b from-neutral-50 to-white">
      <div className="container-custom">
        <div className="section-title">
          <h2 className="text-neutral-900">Try Our <span className="text-primary-600">Predictor</span></h2>
          <p className="section-subtitle">
            Enter a movie description below and our AI will analyze the text to predict the most likely genres.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-2">
                Movie Description
              </label>
              <div className="relative">
                <textarea
                  id="description"
                  className="w-full p-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 min-h-[160px]"
                  placeholder="Enter a movie description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {description && (
                  <button 
                    onClick={handleClear}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
                    aria-label="Clear text"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-700 mb-2">Sample Descriptions</p>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_DESCRIPTIONS.map((sample, index) => (
                  <button
                    key={index}
                    onClick={() => handleUseSample(index)}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                      selectedSample === index 
                        ? 'bg-primary-100 text-primary-700 border border-primary-300' 
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-transparent'
                    }`}
                  >
                    Sample {index + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="btn-primary w-full flex justify-center"
              onClick={handlePredict}
              disabled={loading || !description.trim()}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles size={20} className="mr-2" />
                  Predict Genres
                </>
              )}
            </button>

            {genres.length > 0 && (
              <div className="mt-6 animate-fade-in">
                <h3 className="text-lg font-semibold text-neutral-800 mb-3">Predicted Genres:</h3>
                <div className="flex flex-wrap gap-2">
                  {genres.map((genre, index) => (
                    <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-fade-in">
                <p>{error}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo;