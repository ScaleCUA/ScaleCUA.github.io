import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LeaderboardHome: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'open' | 'closed'>('open')

  return (
    <div className="min-h-screen bg-warm-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 leading-normal" style={{ paddingBottom: '0.1em' }}>
            GUI Agent Leaderboards
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose your evaluation approach: transparent learning with open tests or fair competition with closed tests
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-warm p-1 inline-flex">
            <button
              onClick={() => setActiveTab('open')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'open'
                  ? 'bg-warm-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-warm-600 hover:bg-warm-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Open Tests</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('closed')}
              className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'closed'
                  ? 'bg-coral-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-coral-600 hover:bg-coral-50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Closed Tests</span>
              </div>
            </button>
          </div>
        </div>

        {/* Open Tests Content */}
        {activeTab === 'open' && (
          <div className="card max-w-4xl mx-auto">
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-warm-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-normal" style={{ paddingBottom: '0.1em' }}>
                Open Tests Leaderboard
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Transparent evaluation with publicly available test cases and environments. Perfect for learning, research, and community collaboration.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4 bg-warm-50 rounded-lg">
                  <div className="text-2xl font-bold text-warm-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Transparent</div>
                </div>
                <div className="text-center p-4 bg-warm-50 rounded-lg">
                  <div className="text-2xl font-bold text-warm-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Public Test Cases</div>
                </div>
                <div className="text-center p-4 bg-warm-50 rounded-lg">
                  <div className="text-2xl font-bold text-warm-600 mb-2">Free</div>
                  <div className="text-sm text-gray-600">For Everyone</div>
                </div>
              </div>

              <Link
                to="/leaderboard/open"
                className="inline-flex items-center px-8 py-3 bg-warm-500 text-white font-medium rounded-lg hover:bg-warm-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View Open Leaderboard
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-warm-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Public Test Cases</h4>
                    <p className="text-sm text-gray-600">All environments and test scenarios available for study and reproduction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-warm-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Community Learning</h4>
                    <p className="text-sm text-gray-600">Collaborative environment for sharing insights and improvements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-warm-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Research & Education</h4>
                    <p className="text-sm text-gray-600">Ideal for academic research and educational purposes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-warm-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Reproducible Results</h4>
                    <p className="text-sm text-gray-600">Fully transparent evaluation methodology and scoring</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Closed Tests Content */}
        {activeTab === 'closed' && (
          <div className="card max-w-4xl mx-auto border-coral-200">
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-normal" style={{ paddingBottom: '0.1em' }}>
                Closed Tests Leaderboard
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Private, secure evaluation with confidential test cases. Eliminates over-fitting and ensures truly fair competition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4 bg-coral-50 rounded-lg">
                  <div className="text-2xl font-bold text-coral-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Fair Competition</div>
                </div>
                <div className="text-center p-4 bg-coral-50 rounded-lg">
                  <div className="text-2xl font-bold text-coral-600 mb-2">0</div>
                  <div className="text-sm text-gray-600">Public Test Cases</div>
                </div>
                <div className="text-center p-4 bg-coral-50 rounded-lg">
                  <div className="text-2xl font-bold text-coral-600 mb-2">Premium</div>
                  <div className="text-sm text-gray-600">Evaluation Service</div>
                </div>
              </div>

              <Link
                to="/leaderboard/closed"
                className="inline-flex items-center px-8 py-3 bg-coral-500 text-white font-medium rounded-lg hover:bg-coral-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View Closed Leaderboard
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Features */}
            <div className="border-t border-coral-200 pt-8 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-coral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Private Test Cases</h4>
                    <p className="text-sm text-gray-600">Confidential evaluation scenarios prevent any over-fitting</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-coral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Dynamic Environments</h4>
                    <p className="text-sm text-gray-600">Unique scenarios generated for each evaluation round</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-coral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Authenticated Access</h4>
                    <p className="text-sm text-gray-600">Secure submission process with verified team credentials</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-coral-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-coral-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Detailed Reports</h4>
                    <p className="text-sm text-gray-600">Comprehensive performance analytics and improvement insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center leading-normal" style={{ paddingBottom: '0.1em' }}>Which Leaderboard is Right for You?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-warm-50 rounded-lg p-6">
                <h4 className="font-bold text-warm-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Choose Open Tests If:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-warm-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You&apos;re learning about GUI agents
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-warm-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You need transparent evaluation methods
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-warm-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You want to reproduce results
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-warm-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You&apos;re conducting academic research
                  </li>
                </ul>
              </div>
              <div className="bg-coral-50 rounded-lg p-6">
                <h4 className="font-bold text-coral-700 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Choose Closed Tests If:
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-coral-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You need definitive performance validation
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-coral-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You&apos;re competing in serious benchmarks
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-coral-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You want to prevent any over-fitting
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 text-coral-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    You need enterprise-grade validation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardHome