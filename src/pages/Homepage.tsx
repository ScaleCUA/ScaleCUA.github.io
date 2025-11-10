import React from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-warm-50">
      {/* Full-width Hero Section with Enhanced Design */}
      <div className="relative bg-gradient-to-br from-warm-400 via-warm-500 to-coral-600 py-20 md:py-32 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-coral-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gold-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-lg border border-white/30">
                🚀 Revolutionary GUI Agent Evaluation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ScaleCUA
              <br />
              Benchmark
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-warm-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of fair GUI agent testing with AI-generated
              environments that eliminate over-fitting and ensure authentic
              evaluation of agent capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/leaderboard"
                className="btn-primary-on-warm shadow-xl text-lg px-8 py-4"
              >
                View Leaderboard
              </Link>
              <Link
                to="/environment"
                className="btn-secondary-on-warm shadow-xl text-lg px-8 py-4"
              >
                Explore Environments
              </Link>
            </div>
            <div className="flex justify-center items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-gold-300 rounded-full animate-pulse"
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-3 h-3 bg-coral-300 rounded-full animate-pulse"
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced with Varied Layouts */}
      <div className="py-20 bg-gradient-to-br from-warm-50 to-coral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-warm-100 text-warm-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Core Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why ScaleCUA?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our benchmark revolutionizes GUI agent evaluation with
              AI-generated environments that prevent over-fitting and ensure
              fair assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Feature - Larger */}
            <div className="lg:col-span-2">
              <div className="card shadow-xl p-8 bg-gradient-to-br from-white to-warm-50 border-l-4 border-warm-500 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      AI-Generated Environments
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      Dynamic testing environments created by AI ensure unique
                      evaluation scenarios for every session, preventing
                      memorization and guaranteeing fair assessment of agent
                      capabilities.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm font-medium">
                        Unique Per Session
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm font-medium">
                        Infinite Variations
                      </span>
                      <span className="inline-flex items-center px-3 py-1 bg-gold-100 text-gold-700 rounded-full text-sm font-medium">
                        Zero Over-fitting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Features */}
            <div className="card shadow-lg p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    GUI Agent Evaluation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Specialized benchmark for evaluating graphical user
                    interface agents across diverse interaction scenarios and
                    real-world applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow-lg p-6 bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Fair Evaluation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Eliminates over-fitting issues found in fixed environment
                    benchmarks by generating unique testing scenarios for each
                    evaluation.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow-lg p-6 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Flexible & Extensible
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Adaptive framework that easily incorporates new agent types,
                    environments, and evaluation metrics as the field evolves.
                  </p>
                </div>
              </div>
            </div>

            <div className="card shadow-lg p-6 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    Interactive Demos
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Live interactive environments showcasing agent capabilities
                    in real-time testing scenarios with diverse GUI challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benchmark Scale Section - Enhanced Visual Design */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-coral-100 text-coral-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              Platform Scale
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benchmark Scale & Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented scale and flexibility in GUI agent
              evaluation with our comprehensive benchmark platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Primary Stats - Optimized Hover Effects */}
            <div className="benchmark-card group relative">
              <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-warm-400 to-coral-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl"></div>
              <div className="relative card p-8 bg-gradient-to-br from-warm-50 to-coral-50 border-0 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-warm-600 bg-warm-100 px-3 py-1 rounded-full group-hover:bg-warm-200 transition-colors duration-300">
                    Universal Access
                  </span>
                </div>
                <div className="text-5xl font-bold text-warm-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                  Universal
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  Any GUI Agent • Minimum Cost
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-warm-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-warm-500 mr-2 group-hover:text-warm-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Zero infrastructure requirements
                  </div>
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-warm-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-warm-500 mr-2 group-hover:text-warm-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cloud-based evaluation
                  </div>
                </div>
              </div>
            </div>

            <div className="benchmark-card group relative">
              <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-coral-400 to-gold-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl"></div>
              <div className="relative card p-8 bg-gradient-to-br from-coral-50 to-gold-50 border-0 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <span className="text-sm font-medium text-coral-600 bg-coral-100 px-3 py-1 rounded-full group-hover:bg-coral-200 transition-colors duration-300">
                    Infinite Scale
                  </span>
                </div>
                <div className="text-5xl font-bold text-coral-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                  ∞
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  Generated Environments
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-coral-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-coral-500 mr-2 group-hover:text-coral-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    AI-powered generation
                  </div>
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-coral-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-coral-500 mr-2 group-hover:text-coral-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Never repeated scenarios
                  </div>
                </div>
              </div>
            </div>

            <div className="benchmark-card group relative">
              <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-gold-400 to-warm-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl"></div>
              <div className="relative card p-8 bg-gradient-to-br from-gold-50 to-warm-50 border-0 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gold-600 bg-gold-100 px-3 py-1 rounded-full group-hover:bg-gold-200 transition-colors duration-300">
                    Comprehensive
                  </span>
                </div>
                <div className="text-5xl font-bold text-gold-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                  50K+
                </div>
                <p className="text-gray-700 text-lg mb-4">Test Scenarios</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gold-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-gold-500 mr-2 group-hover:text-gold-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Multi-platform coverage
                  </div>
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gold-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-gold-500 mr-2 group-hover:text-gold-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Real-world applications
                  </div>
                </div>
              </div>
            </div>

            <div className="benchmark-card group relative">
              <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-warm-400 to-coral-400 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl"></div>
              <div className="relative card p-8 bg-gradient-to-br from-warm-50 to-coral-50 border-0 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ease-out">
                    <svg
                      className="w-8 h-8 text-white"
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
                  <span className="text-sm font-medium text-warm-600 bg-warm-100 px-3 py-1 rounded-full group-hover:bg-warm-200 transition-colors duration-300">
                    Secure
                  </span>
                </div>
                <div className="text-5xl font-bold text-warm-600 mb-4 group-hover:scale-105 transition-transform duration-300">
                  Zero
                </div>
                <p className="text-gray-700 text-lg mb-4">Over-fitting Risk</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-warm-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-warm-500 mr-2 group-hover:text-warm-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dynamic generation
                  </div>
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-warm-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-warm-500 mr-2 group-hover:text-warm-600 transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Fair evaluation guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Stats Bar */}
          <div className="bg-gradient-to-r from-warm-500 to-coral-500 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
            </div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm opacity-90">Platform Types</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">527</div>
                  <div className="text-sm opacity-90">Test Cases</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">AI Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0</div>
                  <div className="text-sm opacity-90">Memorization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section with Dynamic Background */}
      <div className="py-20 md:py-32 bg-gradient-to-br from-coral-400 via-coral-500 to-warm-600 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-lg border border-white/30">
              🚀 Join the Revolution
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Transform GUI Agent
            <br />
            Evaluation Today
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            Experience the future of fair GUI agent testing with our
            AI-generated environment benchmark that eliminates over-fitting and
            ensures authentic evaluation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/leaderboard"
              className="btn-primary-on-warm shadow-xl text-lg px-8 py-4 bg-white hover:bg-gray-100"
            >
              View Leaderboard
            </Link>
            <Link
              to="/environment"
              className="btn-secondary-on-warm shadow-xl text-lg px-8 py-4 border-2 border-white hover:bg-white hover:text-coral-600"
            >
              Explore Environments
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-90">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Zero Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Fair Evaluation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">100% AI Generated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
