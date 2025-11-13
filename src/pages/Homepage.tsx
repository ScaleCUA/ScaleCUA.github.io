import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-2">
                GUI Agent Benchmark
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                ScaleWoB
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fair evaluation of GUI agents using AI-generated testing
                environments.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/gallery"
                  className="px-5 py-2 bg-gray-800 text-white text-sm font-medium rounded-sm hover:bg-gray-700 transition-colors"
                >
                  Explore Environments
                </Link>
                <Link
                  to="/leaderboard"
                  className="px-5 py-2 border border-gray-300 text-gray-800 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors"
                >
                  View Leaderboard
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="w-48 h-48 rounded-sm bg-gray-200 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-700"
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
      </div>

      {/* Key Features Section */}
      <div className="border-b border-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
              Core Advantages
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why Choose ScaleWoB
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-300 rounded-sm hover:border-gray-400 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-sm mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI-Generated Environments
              </h3>
              <p className="text-gray-600 text-sm">
                Unique testing scenarios for every evaluation, preventing
                memorization and ensuring fair assessment.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 border border-gray-300 rounded-sm hover:border-gray-400 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-sm mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fair Evaluation
              </h3>
              <p className="text-gray-600 text-sm">
                Eliminates over-fitting issues found in fixed environment
                benchmarks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 border border-gray-300 rounded-sm hover:border-gray-400 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-sm mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-platform Support
              </h3>
              <p className="text-gray-600 text-sm">
                Evaluate agents across web applications, desktop apps, and
                mobile interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Scale Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
              Benchmark Metrics
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Unprecedented Scale
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">3+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                Platforms
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                Test Cases
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                Environments
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">
                AI Generated
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-100 rounded-sm p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Dynamic Testing Ecosystem
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ScaleWoB creates a unique testing environment for each
                evaluation session, ensuring that agents are tested on their
                actual capabilities rather than memorization of fixed scenarios.
                This dynamic approach provides the most authentic evaluation of
                GUI agent performance available today.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 border-t border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of fair GUI agent testing with our
              AI-generated environment benchmark.
            </p>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link
                to="/gallery"
                className="px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-sm hover:bg-gray-700 transition-colors"
              >
                Explore Environments
              </Link>
              <Link
                to="/leaderboard"
                className="px-6 py-2 border border-gray-300 text-gray-800 text-sm font-medium rounded-sm hover:bg-gray-50 transition-colors"
              >
                View Leaderboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
