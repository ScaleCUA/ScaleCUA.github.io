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

      {/* News Section - Newspaper Style */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="py-6 border-b-2 border-gray-300">
            <div className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
              Latest News
            </div>
          </div>

          {/* News Items */}
          <div className="py-8">
            <div className="space-y-3">
              {/* News Item 1 - SDK Release (Released) */}
              <div className="border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="p-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase tracking-wide">
                          SDK
                        </span>
                        <span className="text-sm text-gray-600 font-medium">
                          2025.11.26
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Python SDK for Agent Development
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        Official Python SDK to streamline agent development and
                        evaluation on ScaleWoB environments. Includes utilities
                        for environment interaction and result analysis.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="https://github.com/ScaleWoB/ScaleWoB"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white text-xs font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-1.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                        <a
                          href="https://pypi.org/project/scalewob/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 border-2 border-gray-800 text-gray-800 text-xs font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 mr-1.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 17.21l-4.5-4.5 1.41-1.41L10 14.38l6.59-6.59L18 9.21l-8 8z" />
                          </svg>
                          PyPI
                        </a>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <div className="w-10 h-10 bg-green-100 border-2 border-green-300 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Item 2 - Dataset Release (Coming Soon - Disabled) */}
              <div className="border-2 border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed">
                <div className="p-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gray-400 text-white text-xs font-bold uppercase tracking-wide">
                          Dataset
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          Coming Soon
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-600 mb-2">
                        ScaleWoB Dataset v1.0
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Initial release of the ScaleWoB dataset featuring 1000+
                        diverse GUI agent tasks across web, mobile, and desktop
                        platforms. Available for download and research use.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="w-10 h-10 bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* News Item 3 - Paper Release (Coming Soon - Disabled) */}
              <div className="border-2 border-gray-200 bg-gray-100 opacity-60 cursor-not-allowed">
                <div className="p-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-gray-400 text-white text-xs font-bold uppercase tracking-wide">
                          Paper
                        </span>
                        <span className="text-sm text-gray-500 font-medium">
                          Coming Soon
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-600 mb-2">
                        Research Paper Publication
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Comprehensive research paper detailing the ScaleWoB
                        methodology, benchmark design, and evaluation results.
                        Includes baseline performance analysis.
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="w-10 h-10 bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
