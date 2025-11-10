import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/common/HeroSection';
import StatCard from '../components/common/StatCard';

const LeaderboardHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'open' | 'closed'>('open');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        badge={{
          text: '🏆 Competitive Benchmark Platform',
          variant: 'default',
        }}
        title={['GUI Agent', 'Leaderboards']}
        description="Choose your evaluation approach: transparent learning with open tests or fair competition with closed tests"
        backgroundVariant="warm-gradient"
        showPulseDots={true}
      />

      {/* Enhanced Tab Navigation */}
      <section className="relative bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-warm-50 to-coral-50 rounded-2xl shadow-xl p-3 inline-flex backdrop-blur-sm gap-2">
              <button
                onClick={() => setActiveTab('open')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'open'
                    ? 'bg-gradient-to-r from-warm-500 to-warm-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-warm-600 hover:bg-warm-100/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      activeTab === 'open' ? 'bg-white/20' : 'bg-warm-200'
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Open Tests</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('closed')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === 'closed'
                    ? 'bg-gradient-to-r from-coral-500 to-coral-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-coral-600 hover:bg-coral-100/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      activeTab === 'closed' ? 'bg-white/20' : 'bg-coral-200'
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">Closed Tests</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative bg-gradient-to-br from-warm-50 to-white py-16 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Open Tests Content */}
          {activeTab === 'open' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-warm-200 to-warm-400 rounded-2xl flex items-center justify-center shadow-lg">
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      Open Tests Leaderboard
                    </h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="inline-flex items-center space-x-3 bg-warm-100 text-warm-700 px-3 py-1 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-warm-500 rounded-full animate-pulse"></div>
                        Transparent & Collaborative
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Transparent evaluation with publicly available test cases and
                  environments. Perfect for learning, research, and community
                  collaboration.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <StatCard
                    variant="minimal"
                    value="100%"
                    label="Transparent"
                    colorTheme="warm"
                    size="lg"
                  />
                  <StatCard
                    variant="minimal"
                    value="500+"
                    label="Test Cases"
                    colorTheme="coral"
                    size="lg"
                  />
                  <StatCard
                    variant="minimal"
                    value="Free"
                    label="For Everyone"
                    colorTheme="gold"
                    size="lg"
                  />
                </div>

                <Link
                  to="/leaderboard/open"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold rounded-2xl hover:from-warm-600 hover:to-warm-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 group"
                >
                  View Open Leaderboard
                  <svg
                    className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="benchmark-card group relative">
                  <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-warm-400 to-coral-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 ease-out blur-xl"></div>
                  <div className="relative card p-8 bg-white border-0 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-warm-100 to-coral-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center space-x-2 bg-warm-100 text-warm-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Key Features
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Public Test Cases
                            </h4>
                            <p className="text-gray-600">
                              All environments and test scenarios available for
                              study and reproduction
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Community Learning
                            </h4>
                            <p className="text-gray-600">
                              Collaborative environment for sharing insights and
                              improvements
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Research & Education
                            </h4>
                            <p className="text-gray-600">
                              Ideal for academic research and educational
                              purposes
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-warm-400 to-warm-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Reproducible Results
                            </h4>
                            <p className="text-gray-600">
                              Fully transparent evaluation methodology and
                              scoring
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Closed Tests Content */}
          {activeTab === 'closed' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-200 to-coral-400 rounded-2xl flex items-center justify-center shadow-lg">
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      Closed Tests Leaderboard
                    </h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="inline-flex items-center space-x-3 bg-coral-100 text-coral-700 px-3 py-1 rounded-full text-sm font-medium">
                        <div className="w-2 h-2 bg-coral-500 rounded-full animate-pulse"></div>
                        Secure & Fair Competition
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Private, secure evaluation with confidential test cases.
                  Eliminates over-fitting and ensures truly fair competition.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <StatCard
                    variant="minimal"
                    value="100%"
                    label="Fair Competition"
                    colorTheme="coral"
                    size="lg"
                  />
                  <StatCard
                    variant="minimal"
                    value="0"
                    label="Public Test Cases"
                    colorTheme="gold"
                    size="lg"
                  />
                  <StatCard
                    variant="minimal"
                    value="Pro"
                    label="Evaluation Service"
                    colorTheme="coral"
                    size="lg"
                  />
                </div>

                <Link
                  to="/leaderboard/closed"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-2xl hover:from-coral-600 hover:to-coral-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 group"
                >
                  View Closed Leaderboard
                  <svg
                    className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="space-y-6">
                <div className="benchmark-card group relative">
                  <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-coral-400 to-coral-600 rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-500 ease-out blur-xl"></div>
                  <div className="relative card p-8 bg-white border-0 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-coral-100 to-gold-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center space-x-2 bg-coral-100 text-coral-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Key Features
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Private Test Cases
                            </h4>
                            <p className="text-gray-600">
                              Confidential evaluation scenarios prevent any
                              over-fitting
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Dynamic Environments
                            </h4>
                            <p className="text-gray-600">
                              Unique scenarios generated for each evaluation
                              round
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Authenticated Access
                            </h4>
                            <p className="text-gray-600">
                              Secure submission process with verified team
                              credentials
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-4 group/item">
                          <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                              Detailed Reports
                            </h4>
                            <p className="text-gray-600">
                              Comprehensive performance analytics and
                              improvement insights
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Comparison Section */}
      <section className="relative bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-warm-100 to-coral-100 text-warm-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              Choose Your Path
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 leading-normal">
              Which Leaderboard is Right for You?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the evaluation approach that best matches your goals and
              requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="benchmark-card group relative">
              <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-warm-400 to-warm-600 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl"></div>
              <div className="relative bg-gradient-to-br from-warm-50 to-white rounded-3xl p-8 border-2 border-warm-100 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-warm-100 to-coral-100 rounded-full -mr-20 -mt-20 opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-warm-400 to-warm-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-warm-700 group-hover:scale-105 transition-transform duration-300">
                      Choose Open Tests If:
                    </h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-warm-300 to-warm-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You&apos;re learning about GUI agents
                        </h4>
                        <p className="text-gray-600">
                          Perfect for understanding agent capabilities and
                          limitations
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-warm-300 to-warm-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You need transparent evaluation methods
                        </h4>
                        <p className="text-gray-600">
                          Full visibility into test cases and evaluation
                          criteria
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-warm-300 to-warm-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You want to reproduce results
                        </h4>
                        <p className="text-gray-600">
                          All test scenarios available for verification and
                          validation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-warm-300 to-warm-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You&apos;re conducting academic research
                        </h4>
                        <p className="text-gray-600">
                          Ideal for educational purposes and scientific studies
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="benchmark-card group relative">
              <div className="benchmark-card-glow absolute -inset-1 bg-gradient-to-r from-coral-400 to-coral-600 rounded-3xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl"></div>
              <div className="relative bg-gradient-to-br from-coral-50 to-white rounded-3xl p-8 border-2 border-coral-100 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300 ease-out">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-coral-100 to-gold-100 rounded-full -mr-20 -mt-20 opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-coral-700 group-hover:scale-105 transition-transform duration-300">
                      Choose Closed Tests If:
                    </h3>
                  </div>
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-coral-300 to-coral-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You need definitive performance validation
                        </h4>
                        <p className="text-gray-600">
                          Authoritative assessment for production-ready systems
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-coral-300 to-coral-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You&apos;re competing in serious benchmarks
                        </h4>
                        <p className="text-gray-600">
                          Level playing field with confidential test scenarios
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-coral-300 to-coral-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You want to prevent any over-fitting
                        </h4>
                        <p className="text-gray-600">
                          Truly fair competition with no test case exposure
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start space-x-4 group/item">
                      <div className="w-8 h-8 bg-gradient-to-br from-coral-300 to-coral-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                          You need enterprise-grade validation
                        </h4>
                        <p className="text-gray-600">
                          Professional evaluation with detailed reporting
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaderboardHome;
