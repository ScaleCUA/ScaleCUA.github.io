import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
              ScaleCUA
            </h3>
            <p className="text-xs leading-relaxed text-gray-600">
              A GUI agent benchmark featuring AI-generated testing environments
              for fair evaluation of graphical interface agents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/leaderboard"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Leaderboard
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
              Resources
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/ScaleCUA/ScaleCUA.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <span className="text-gray-500">
                  Documentation (Coming Soon)
                </span>
              </li>
              <li>
                <span className="text-gray-500">
                  Research Papers (Coming Soon)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© {currentYear} ScaleCUA. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <span className="tracking-tight">
                Built with precision for fair GUI agent evaluation
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
