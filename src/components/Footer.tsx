import React from 'react';
import { Film } from 'lucide-react';
import { NAV_ITEMS, FOOTER_LINKS } from '../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center space-x-2 mb-4">
              <Film size={32} className="text-primary-400" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary-400">Genre</span>
                <span className="text-white">Predict</span>
              </span>
            </a>
            <p className="text-neutral-400 mb-6 max-w-md">
              Advanced machine learning model for predicting movie genres from
              descriptions, making content classification efficient and
              accurate.
            </p>
          </div>

          {/* Links */}
          {FOOTER_LINKS.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold mb-4 text-white">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;