import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section - Newspaper Style */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newspaper Header */}
          <div className="py-8 border-b-2 border-gray-400">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-2 leading-none">
                  ScaleWoB
                </h1>
                <div className="text-lg font-medium text-gray-700">
                  Scalable World of Bits - Synthetic Computer-Use Environments
                  for GUI Agents
                </div>
              </div>
              {/* GitHub-style Avatar */}
              <div className="ml-6 shrink-0">
                <div className="w-20 h-20 rounded-lg border-2 border-gray-300 bg-gray-100 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-10 h-10 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Main Article Area */}
          <div className="py-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-lg font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                About
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-8 wrap-break-words">
                GUI agents require training and evaluation in diverse
                interactive computer-use environments, yet high-quality such
                environments remain scarce. ScaleWoB addresses this gap through
                semi-automated environment synthesis. Each environment in
                ScaleWoB is proposed by domain experts & crowd workers and
                developed with AI, featuring realistic interfaces and content,
                and capable of executing complex tasks with verifiable,
                rule-based rewards. ScaleWoB now offers a large and varied
                collection of 1000+ tasks and environments spanning three major
                platforms including mobile, web and desktop.
              </p>
            </div>

            {/* Divider */}
            <div className="border-b-2 border-gray-300 mb-8"></div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/environments"
                className="px-8 py-3 bg-gray-900 text-white text-sm font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center group"
              >
                View Environments
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="https://lw572lx3ee.feishu.cn/share/base/form/shrcnjzeeqdcf4d6yDPKHw5xbOd"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-800 text-gray-800 text-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                Create Environment
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </a>
              <Link
                to="/leaderboard"
                className="px-8 py-3 border-2 border-gray-800 text-gray-800 text-sm font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                View Leaderboard
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Newspaper Columns */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="py-6 border-b-2 border-gray-300">
            <div className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
              Key Features
            </div>
          </div>

          {/* Three Column Newspaper Layout */}
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Column 1 */}
              <div className="md:border-r md:border-gray-200 md:pr-6 md:px-4 px-2">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      AI-Generated Environments
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed wrap-break-words">
                      Unique testing environment generated dynamically for each
                      task, enabling large-scale and diverse agent environment
                      simulation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="md:border-r md:border-gray-200 md:px-6 px-2 md:py-0 py-4">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      Stable and Fast Execution
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed wrap-break-words">
                      Lightweight frontend and backend with synthetic in-app
                      data, making the tests fast and reproducible.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="md:pl-6 md:px-4 px-2">
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                      Cross-Platform Testing
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed wrap-break-words">
                      Comprehensive evaluation framework supporting web, desktop
                      and mobile platforms within unified testing interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - Newspaper Style */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 border-b-2 border-gray-300">
            <div className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
              Platform Statistics
            </div>
          </div>

          <div className="py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">3+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Platforms
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">
                  50K+
                </div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Tasks
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">∞</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Environments
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 mb-2">
                  100%
                </div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  AI Generated
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
